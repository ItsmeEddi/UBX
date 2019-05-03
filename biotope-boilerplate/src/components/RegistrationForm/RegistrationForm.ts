import Component from '@biotope/element';
import template from './template';
import SimpleButton from '../SimpleButton/SimpleButton';

interface RegistrationFormProps {

}

interface RegistrationFormState {

}

class RegistrationForm extends Component<RegistrationFormProps, RegistrationFormState> {
    static componentName = 'registration-form';
    static dependencies = [SimpleButton as any];

    render() {
        return template(this.html, {});
    }
}

export default RegistrationForm;
