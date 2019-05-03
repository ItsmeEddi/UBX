import * as styles from './styles.scss';

interface PastEventsTemplateData {
    image: string;
    logo: string;
    description: string;
    link: string;
    linkText: string;
}

export default (render: Function, data: PastEventsTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="past-events">
            <img class="past-events__logo" src=${data.logo}>
            <img class="past-events__image" src=${data.image}>
            <div class="past-events__content">
                <p>${data.description}</p>
                <a href=${data.link} target="_blank"><i></i>${data.linkText}</a>
            </div>
        </div>
    `;
}
