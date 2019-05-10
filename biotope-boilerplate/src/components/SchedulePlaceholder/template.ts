import * as styles from './styles.scss';

interface SchedulePlaceholderTemplateData {

}

export default (render: Function, data: SchedulePlaceholderTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="sp">
            <div class="sp__box-one"></div>
            <h3 class="sp__title">Schedule will be announced soon</h3>
            <span class="sp__date">October 17<br>09:00 to 18:00</span>
        </div>
    `;
}
