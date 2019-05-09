import * as styles from './styles.scss';

interface EventDateTemplateData {
    date: string;
    location: string;
}

export default (render: Function, { date, location }: EventDateTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="event-date">
            <p class="event-date__numbers">${date}</p>
            <div class="event-date__title"><p>${location}</p></div>
        </div>
    `;
}
