import * as styles from './styles.scss';

interface SnapLayoutTemplateData {

}

export default (render: Function, data: SnapLayoutTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <fixed-nav></fixed-nav>
        <div class="snap-layout__container">
            <section id="video" class="snap-layout__section white">
                    <video-stage></video-stage>
            </section>
            <section class="snap-layout__section white twelve-columns-grid">
                <glyph-headline dark>UBX 2019</glyph-headline>
                <div class="offset-second-column">
                    <event-date></event-date>
                    <simple-text>What role does Useful Brand Experience play in redefining digital business? Under the motto "Creating Digital Opportunities", UBX19 presents how the power and diversity of digital solutions and processes can be used to create rewarding brand experiences. UBX19 combines inspiring keynotes and innovative digitisation cases from all over the world.</simple-text>
                    <simple-button link="#registration">Registration</simple-button>
                </div>
            </section>
            <section id="speaker" class="snap-layout__section dark-blue">
                <glyph-headline light>Speakers</glyph-headline>
                <x-speakers class="two-columns-grid"></x-speakers>
            </section>
            <section id="schedule"class="snap-layout__section white">
                <glyph-headline dark>Schedule</glyph-headline>
                <schedule-placeholder></schedule-placeholder>
            </section>
            <section id="location" class="snap-layout__section dark-blue twelve-columns-grid">
                <glyph-headline light>Location</glyph-headline>
                <address-label class="offset-second-column"></address-label>
                <google-maps></google-maps>
            </section> 
            <section id="events" class="snap-layout__section white">
                <glyph-headline dark>Previous years</glyph-headline>
                <x-events class="two-columns-grid"></x-events>
            </section>    
            <section id="registration" class="snap-layout__section dark-blue twelve-columns-grid">
                <glyph-headline light>Registration</glyph-headline>
                <div class="offset-second-column">
                    <simple-text>Welche Rolle spielen Useful Brand Experienxe auf dem Weg um digitalen Business? Unter dem Motto "Create Digital Opportunities" zeigt die UBX19, wie die Macht und Vielfalt digitaler Lösungen und Prozesse genutzt werden können, ...</simple-text>
                    <registration-form></registration-form>
                </div>
            </section>
            <main-footer></main-footer>
        </div>
    `;
}