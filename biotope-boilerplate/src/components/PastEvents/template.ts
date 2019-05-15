import * as styles from './styles.scss';

interface PastEventsTemplateData {
    image: string;
    logo: string;
    link: string;
    linkText: string;
}

export default (render: Function, data: PastEventsTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="past-event">
            <img class="past-event__logo" alt="past events logo" src=${data.logo}>
            <img class="past-event__image" alt="past events image" src=${data.image}>
            <div class="past-event__content">
                <simple-text><slot></slot></simple-text>
                <a href=${data.link} target="_blank"><i></i>${data.linkText}</a>
            </div>
        </div>
    `;
}
