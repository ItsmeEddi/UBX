import * as styles from "./styles.scss";

export default (render: Function, data: {}) => {
	return render`
        <style>${styles.toString()}</style>
        <fixed-nav></fixed-nav>

        <section class="snap-layout__section light">
            <video-stage></video-stage>
        </section>

        <section class="snap-layout__section light">
            <root-info></root-info>
        </section>

        <section id="speaker" class="snap-layout__section dark">
            <root-speakers></root-speakers>
        </section>

        <section id="schedule" class="snap-layout__section light">
            <root-schedule></root-schedule>
        </section>


        <section id="location" class="snap-layout__section dark">
            <root-location></root-location>
        </section>

        <section id="events" class="snap-layout__section light">
            <root-events></root-events>
        </section>

        <section id="registration" class="snap-layout__section dark">
            <root-registration></root-registration>
        </section>

        <main-footer></main-footer>
    `;
};
