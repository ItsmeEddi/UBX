import * as styles from './styles.scss';

interface VideoStageTemplateData {
    subheadline: string;
    logo: string;
    preheadline: string;
    headline: string;
    videoUrl: string;
    cs: Function
}

export default (render: Function, { cs, subheadline, logo, preheadline, headline, videoUrl }: VideoStageTemplateData) => {
    return render`
        ${cs(styles)}
        <header class="video-stage">
            <div class="video-stage__overlay">
                <span>${subheadline}</span>
                <img src="${logo}" alt="Logo">
                <span class="video-stage__date">${preheadline}</span>
            </div>
            <h1>${headline}</h1>
            <video autoplay loop muted class="video-stage__video">
                <source src=${videoUrl} type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </header>
        `;
}
