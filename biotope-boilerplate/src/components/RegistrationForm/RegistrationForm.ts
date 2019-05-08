import Component from '@biotope/element';
import template from './template';
import SimpleButton from '../SimpleButton/SimpleButton';
import { FormState } from './interface';

declare var grecaptcha: any;



interface RegistrationFormProps {

}

interface RegistrationFormState {
    formState: FormState;
    formWatchErrors: boolean;
    formErrors: {
        name: boolean,
        email: boolean,
    }
}

const verifyEmail = (val) => (val.indexOf('@') === -1 || val.length < 3);

const verifyName = (name) => name.length < 2;

class RegistrationForm extends Component<RegistrationFormProps, RegistrationFormState> {
    static componentName = 'registration-form';
    static dependencies = [SimpleButton as any];
    constructor() {
        super();
        this.verifyInput = this.verifyInput.bind(this);
    }
    get defaultState() {
        return {
            formState: FormState.INITIAL,
            formWatchErrors: false,
            formErrors: {
                name: false,
                email: false,
            }
        }
    }
    verifyInput(type) {
        if (!this.state.formWatchErrors) {
            return;
        }
        if (type === 'name') {
            const name = (this.shadowRoot.getElementById('name') as HTMLInputElement).value;
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    name: verifyName(name),
                }
            });
            return;
        }
        if (type === 'email') {
            const email = (this.shadowRoot.getElementById('email') as HTMLInputElement).value;
            this.setState({
                formErrors: {
                    ...this.state.formErrors,
                    email: verifyEmail(email),
                }
            });
        }
    }
    handleSubmission(e) {
        e.preventDefault();
        if (this.state.formState === FormState.SENDING) {
            return;
        }
        const ms = (this.shadowRoot.getElementById('ms') as HTMLInputElement).checked;
        const mr = (this.shadowRoot.getElementById('mr') as HTMLInputElement).checked;
        const name = (this.shadowRoot.getElementById('name') as HTMLInputElement).value;
        const email = (this.shadowRoot.getElementById('email') as HTMLInputElement).value;
        const company = (this.shadowRoot.getElementById('company') as HTMLInputElement).value;
        const position = (this.shadowRoot.getElementById('position') as HTMLInputElement).value;
        const text = (this.shadowRoot.getElementById('text') as HTMLInputElement).value;
        let errors = {
            name: false,
            email: false,
        };
        if (verifyName(name)) {
            errors.name = true;
        }
        if (verifyEmail(email)) {
            errors.email = true;
        }
        this.setState({
            formErrors: errors,
            formWatchErrors: errors.email || errors.name
        });
        if (errors.email || errors.name) {
            return
        }
        if (DEBUG) {
            console.log({ ms, mr, name, email, company, position, text });
        }

        this.setState({
            formState: FormState.SENDING
        })

        grecaptcha.ready(() => {
            grecaptcha.execute(RECAPTCHA_TOKEN, { action: 'landingpage' }).then((token) => {
                fetch(CONTACT_API, {
                    method: 'POST',
                    body: JSON.stringify({ ms, mr, name, email, company, position, text, token })
                }).then(res => {
                    if (res.status !== 200) {
                        this.setState({
                            formState: FormState.ERROR
                        });
                        return;
                    }
                    this.setState({
                        formState: FormState.SUCCESS
                    });
                }).catch(err => {
                    console.log(err);
                    this.setState({
                        formState: FormState.ERROR
                    });
                })
            });
        });

    }
    render() {
        const { formErrors: { name, email } } = this.state;

        return template(this.html, {
            handleSubmission: this.handleSubmission,
            errorName: name ? 'error' : '',
            errorEmail: email ? 'error' : '',
            verifyInput: this.verifyInput,
            formState: this.state.formState,
        });
    }
}

export default RegistrationForm;
