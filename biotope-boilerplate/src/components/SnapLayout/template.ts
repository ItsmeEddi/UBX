import * as styles from './styles.scss';

interface SnapLayoutTemplateData {

}

export default (render: Function, data: SnapLayoutTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <fixed-nav></fixed-nav>
        <div class="snap-layout__container">
        <section class="snap-layout__section white">
            <event-date></event-date>
                <simple-text>Welche Rolle spielen Useful Brand Experienxe auf dem Weg um digitalen Business? Unter dem Motto "Create Digital Opportunities" zeigt die UBX19, wie die Macht und Vielfalt digitaler Lösungen und Prozesse genutzt werden können, ...</simple-text>
                <simple-button>Registration</simple-button>
            </section>
            <section id="speaker" class="snap-layout__section dark-blue">
                <speaker-box></speaker-box>
            </section>
            <section id="schedule"class="snap-layout__section white">
                <simple-text>Schedule</simple-text>
            </section>
            <section id="events" class="snap-layout__section dark-blue">
                <simple-text>Past events</simple-text>
            </section>    
            <section id="location" class="snap-layout__section white">
                <simple-text>Location</simple-text>
            </section> 
            <section id="registration" class="snap-layout__section dark-blue">
                <simple-text>Registration</simple-text>
            </section>
        </div>
    `;
}