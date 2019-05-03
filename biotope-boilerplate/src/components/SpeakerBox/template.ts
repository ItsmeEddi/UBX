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
    return render`
        <style>${styles.toString()}</style>
        <div class="speaker">
            <img src=${data.image}>
            <div class="speaker__box-one"></div>
            <div class="speaker__box-two"></div>
            <h3 class="speaker__title">${data.firstName}<br>${data.lastName}</h3>
            <span class="speaker__job">${data.jobInfo}</span>
            <p class="speaker__toggle" onclick="${data.toggleOpen}">more information<i class="speaker__toggle--arrow"></i></p>
            <p class="speaker__description">${data.description}</p>
        </div>
    `;
}
