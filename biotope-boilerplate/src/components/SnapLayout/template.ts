import * as styles from './styles.scss';
/*import * as background from './background.svg';*/

interface SnapLayoutTemplateData {

}

export default (render: Function, data: SnapLayoutTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <fixed-nav></fixed-nav>
        <div class="snap-layout__container">
            <section id="speaker" class="snap-layout__section dark-blue">Speaker</section>
            <section id="schedule"class="snap-layout__section white">Schedule</section>
            <section id="events" class="snap-layout__section dark-blue">Past events</section>    
            <section id="location" class="snap-layout__section white">Location</section> 
            <section id="registration" class="snap-layout__section dark-blue">Registration</section> 
        </div>
    `;
}