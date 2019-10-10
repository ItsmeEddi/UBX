import * as styles from './styles.scss';

interface RootRegistrationTemplateData {

}

export default (render: Function, data: RootRegistrationTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="registration twelve-column-grid">
            <simple-headline light>Application</simple-headline>
            <simple-text>The UBX19 is fully booked!<br />Would you like to attend the UBX20? Next years conference is taking place on October 15th. Apply now!</simple-text>
            <registration-form></registration-form>
        </div>
    `;
}
