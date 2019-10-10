import * as styles from "./styles.scss";

export default (render: Function, data: {}) => {
	return render`
        <style>${styles.toString()}</style>
        <fixed-nav></fixed-nav>

        <section class="snap-layout__section light">
            <video-stage></video-stage>
            <cookie-confirmation></cookie-confirmation>
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

        <section id="events" class="snap-layout__section dark">
            <root-events></root-events>
        </section>

        <section id="blog" class="snap-layout__section light">
            <root-blog></root-blog>
        </section>

        <section id="registration" class="snap-layout__section dark">
            <root-registration></root-registration>
        </section>

        <section id="location" class="snap-layout__section light">
            <root-location></root-location>
        </section>

        <main-footer></main-footer>
    `;
};
