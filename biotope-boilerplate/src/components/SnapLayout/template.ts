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
        <section class="snap-layout__section white">
            <glyph-headline>UBX 2019</glyph-headline>
            <event-date></event-date>
                <simple-text>Welche Rolle spielen Useful Brand Experienxe auf dem Weg um digitalen Business? Unter dem Motto "Create Digital Opportunities" zeigt die UBX19, wie die Macht und Vielfalt digitaler Lösungen und Prozesse genutzt werden können, ...</simple-text>
                <simple-button link="#registration">Registration</simple-button>
            </section>
            <section id="speaker" class="snap-layout__section dark-blue">
                <glyph-headline>Speakers</glyph-headline>
                <x-speakers></x-speakers>
            </section>
            <section id="schedule"class="snap-layout__section white">
                <glyph-headline>Schedule</glyph-headline>
            </section>
            <section id="location" class="snap-layout__section dark-blue">
                <glyph-headline>Location</glyph-headline>
                <address-label></address-label>
                <google-maps></google-maps>
            </section> 
            <section id="events" class="snap-layout__section white">
                <glyph-headline>Past Events</glyph-headline>
                <x-events></x-events>
            </section>    
            <section id="registration" class="snap-layout__section dark-blue">
                <glyph-headline>Registration</glyph-headline>
                <simple-text>Welche Rolle spielen Useful Brand Experienxe auf dem Weg um digitalen Business? Unter dem Motto "Create Digital Opportunities" zeigt die UBX19, wie die Macht und Vielfalt digitaler Lösungen und Prozesse genutzt werden können, ...</simple-text>
                <registration-form></registration-form>
            </section>
        </div>
    `;
}