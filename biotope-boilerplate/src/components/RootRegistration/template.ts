import * as styles from './styles.scss';

interface RootRegistrationTemplateData {

}

export default (render: Function, data: RootRegistrationTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="registration twelve-column-grid">
            <simple-headline light>Application</simple-headline>
            <simple-text>The UBX19 is an invitation-only conference. However, there is a limited number of places for applicants. If you like to attend the conference on October 17th, apply now by writing us why you want to join.</simple-text>
            <registration-form></registration-form>
        </div>
    `;
}
