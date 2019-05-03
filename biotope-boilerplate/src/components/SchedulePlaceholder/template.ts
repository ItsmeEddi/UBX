import * as styles from './styles.scss';

interface SchedulePlaceholderTemplateData {

}

export default (render: Function, data: SchedulePlaceholderTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="schedule-placeholder">
            <div class="schedule-placeholder__box-one"></div>
            <h3 class="schedule-placeholder__title">Schedule will be announced soon</h3>
            <span class="schedule-placeholder__date">October 17<br>09:00 to 18:00</span>
        </div>
    `;
}
