import * as styles from './styles.scss';

interface EventDateTemplateData {

}

export default (render: Function, data: EventDateTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="event-date">
            <p class="event-date__numbers">17 / 10 / 2019</p>
            <div class="event-date__title"><p>Virtual Identity AG - Munich</p></div>
        </div>
    `;
}
