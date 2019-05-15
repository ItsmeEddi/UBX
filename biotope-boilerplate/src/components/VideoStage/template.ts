import * as styles from './styles.scss';

interface VideoStageTemplateData {
    subheadline: string;
    logo: string;
    preheadline: string;
    videoUrl: string;
    cs: Function
}

export default (render: Function, { cs, subheadline, logo, preheadline, videoUrl }: VideoStageTemplateData) => {
    return render`
        ${cs(styles)}
        <header class="vs">
            <div class="vs__overlay">
                <animated-stage></animated-stage>
            </div>
            <video autoplay loop muted class="vs__video">
                <source src="resources/img/video/imagefilm.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </header>
        `;
}