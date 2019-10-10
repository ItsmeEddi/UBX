import * as styles from './styles.scss';

interface RootLocationTemplateData {

}

export default (render: Function, data: RootLocationTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="location twelve-column-grid">
            <simple-headline dark>Location</simple-headline>
            <div class="location__text location__text__top">
                <simple-text>The conference is hosted by Virtual Identity. For the fifth time the digital agency transforms its Munich office into the conference venue.</simple-text>
                <address-label></address-label>
            </div>
            <img  class="location__image" alt="Virtual Identity building" src="resources/img/ubx_vi-building.jpg">
            <div class="location__text location__text__bottom">
                <simple-text>The conference is hosted by Virtual Identity. For the fifth time the digital agency transforms its Munich office into the conference venue.</simple-text>
                <address-label></address-label>
            </div>
            <div class="location__partner">
                <simple-headline dark>Partner</simple-headline>
                <figure>
                    <a href="https://www.digital-leader-award.de/" target="_blank" aria-label="link to Digital Leader Award">
                        <img src="resources/img/DLA_logo.jpg" alt="Digital Leader Award">
                        <figcaption>Network partner of UBX19</figcaption>
                    </a>
                </figure>
                <figure>
                    <a href="https://www.computerfutures.com/en-gb/" target="_blank" aria-label="link to Computer Futures">
                        <img src="resources/img/CW_logo.jpg" alt="ComputerWoche - Voice of Digital">
                        <figcaption>Media partner of UBX19</figcaption>
                    </a>
                </figure>
            </div>
        </div>
    `;
}
