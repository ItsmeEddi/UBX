import * as styles from './styles.scss';

interface RootLocationTemplateData {

}

export default (render: Function, data: RootLocationTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="location twelve-column-grid">
            <simple-headline light>Location</simple-headline>
            <simple-text>The conference is hosted by Virtual Identity. For the fifth time the digital agency transform its Munich office into the conference venue.</simple-text>
            <address-label></address-label>
        </div>
    `;
}
