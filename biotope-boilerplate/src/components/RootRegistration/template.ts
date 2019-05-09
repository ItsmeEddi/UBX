import * as styles from './styles.scss';

interface RootRegistrationTemplateData {

}

export default (render: Function, data: RootRegistrationTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="root-registration twelve-column-grid">
            <glyph-headline light>Registration</glyph-headline>
            <simple-text>Would you like to attend the UBX Conference on October 17?<br>Sign up by writing us why you want to join.</simple-text>
            <registration-form></registration-form>
        </div>
    `;
}
