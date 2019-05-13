import * as styles from './styles.scss';

interface EventDateTemplateData {
    date: string;
    location: string;
}

export default (render: Function, { date, location }: EventDateTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="ed">
            <p class="ed__numbers">${date}</p>
            <div class="ed__title"><p>${location}</p></div>
        </div>
    `;
}
