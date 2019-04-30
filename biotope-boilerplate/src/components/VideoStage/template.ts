import * as styles from './styles.scss';

interface VideoStageTemplateData {

}

export default (render: Function, data: VideoStageTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <header class="video-stage">
            <div class="video-stage__overlay">
                test overlay
            </div>
            <video autoplay loop muted class="video-stage__video">
                <source src="../resources/video/imagefilm.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <!--<iframe height="500" width="1500" src="https://www.youtube.com/embed/vku04ZcuLuc?controls=true&autoplay=true&loop=true&showinfo=false&modestbranding=true" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
        </header>
        `;
}