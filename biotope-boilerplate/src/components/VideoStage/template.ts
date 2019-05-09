import * as styles from './styles.scss';

interface VideoStageTemplateData {

}

export default (render: Function, data: VideoStageTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <header class="video-stage">
            <div class="video-stage__overlay">
                <animated-stage></animated-stage>
            </div>
            <video autoplay loop muted class="video-stage__video">
                <source src="resources/img/video/imagefilm.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </header>
        `;
}
