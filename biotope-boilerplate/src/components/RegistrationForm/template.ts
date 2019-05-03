import * as styles from './styles.scss';

interface RegistrationFormTemplateData {

}

export default (render: Function, data: RegistrationFormTemplateData) => {
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
                <div>
                    <input name="firstname" id="firstname" type="text" required>
                    <label for="firstname">First name*</label>
                </div>
                <div>
                    <input name="lastname" id="lastname" type="text" required>
                    <label for="lastname">Last name*</label>
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
            <textarea class="registration-form__textarea" placeholder="I want to be there because..."></textarea>
            <simple-button link="#registration">SEND</simple-button>
        </form>
    `;
}