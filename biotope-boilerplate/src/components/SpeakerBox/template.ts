import * as styles from './styles.scss';

interface SpeakerBoxTemplateData {
    toggleOpen: Function;
    firstName: string;
    lastName: string;
    image: string;
    jobInfo: string;
    description: string;
}

export default (render: Function, data: SpeakerBoxTemplateData) => {
    const dynamicStyles = `
        speaker-box[image="${data.image}"] .speaker__image {
            background-image: url(${data.image});
        }

        :host .speaker__image {
            background-image: url(${data.image});
        }
    `;
    return render`
        <style>${styles.toString()}</style>
        <style>
            ${dynamicStyles}
        </style>
        <div class="speaker">
            <div class="speaker__image"></div>
            <div class="speaker__content">
                <h3 class="speaker__headline">${data.firstName}<br>${data.lastName}</h3>
                <div>
                    <p class="speaker__job">${data.jobInfo}</p>
                    <p class="speaker__toggle" onclick="${data.toggleOpen}">more information<span class="speaker__toggle--arrow-down"></span></p>
                </div>
            </div>
            <div class="speaker__description">${data.description}</div>
        </div>
    `;
}