import * as styles from './styles.scss';

interface RootRegistrationTemplateData {

}

export default (render: Function, data: RootRegistrationTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="registration twelve-column-grid">
            <simple-headline light>Application</simple-headline>
            <simple-text>Would you like to attend the UBX Conference on October 17?<br>Apply now by writing us why you want to join.</simple-text>
            <registration-form></registration-form>
        </div>
    `;
}
