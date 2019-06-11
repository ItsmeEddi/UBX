import * as styles from './styles.scss';
import { FormState } from './interface';

interface RegistrationFormTemplateData {
    handleSubmission: Function;
    verifyInput: Function;
    errorName: string;
    errorEmail: string;
    formState: FormState;
}

export default (render: Function, data: RegistrationFormTemplateData) => {
    if (data.formState === FormState.INITIAL || data.formState === FormState.SENDING) {
        return render`
            <style>${styles.toString()}</style>
            <form class="registration-form" autocomplete="off">
                <div class="registration-form__radio-container">
                    <input type="radio" name="gender" id="ms" checked="checked"/>
                    <label for="ms">Ms.</label>
                    <input type="radio" name="gender" id="mr"/>
                    <label for="mr">Mr.</label>
                </div>
                <div class="registration-form__input-container">
                    <div class=${data.errorName}>
                        <input oninput=${() => data.verifyInput('name')} name="name" id="name" type="text" required>
                        <label for="name">Name*</label>
                    </div>
                    <div class=${data.errorEmail}>
                        <input oninput=${() => data.verifyInput('email')} name="email" id="email" type="email" required>
                        <label for="email">Email*</label>
                    </div>
                    <div>
                        <input name="company" id="company" type="text">
                        <label for="company">Company</label>
                    </div>
                    <div>
                        <input name="position" id="position" type="text">
                        <label for="position">Position</label>
                    </div>
                </div>

                <textarea aria-label="text-input" id="text" class="registration-form__textarea" placeholder="I want to be there because..."></textarea>
                <p class="registration-form__legal"> This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms"> Terms of Service</a> apply.</p>
                <div class="registration-form__submission-container">
                    <simple-button type="submit" onclick=${(e) => data.handleSubmission(e)}>${data.formState === FormState.INITIAL ? 'Apply' : 'Sending'}</simple-button>
                </div>
            </form>
        `;
    }
    if (data.formState === FormState.SUCCESS) {
        return render`
            <style>${styles.toString()}</style>
            <div>
                <h2>Thank you for your submission. We'll shortly reach out to you!</h2>
            </div>
        `
    }
    return render`
        <style>${styles.toString()}</style>
        <div>
            <h2>Something went wrong. You may want to try again.</h2>
        </div>
    `
}
