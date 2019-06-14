import * as styles from './styles.scss';

interface RootLocationTemplateData {

}

export default (render: Function, data: RootLocationTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="location twelve-column-grid">
            <div class="location__text">
                <simple-headline light>Location</simple-headline>
                <simple-text>The conference is hosted by Virtual Identity. For the fifth time the digital agency transform its Munich office into the conference venue.</simple-text>
                <address-label></address-label>
            </div>
            <div class="location__images">
                <img  alt="Virtual Identity building" src="resources/img/ubx_vi-building.jpg">
            </div>
        </div>
    `;
}
