import * as styles from './styles.scss';

interface RootScheduleTemplateData {

}

export default (render: Function, data: RootScheduleTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="schedule twelve-column-grid">
            <glyph-headline dark headline="Schedule"></glyph-headline>
            <schedule-placeholder></schedule-placeholder>
        </div>
    `;
}
