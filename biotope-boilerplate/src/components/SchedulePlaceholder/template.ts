import * as styles from './styles.scss';

interface SchedulePlaceholderTemplateData {

}

export default (render: Function, data: SchedulePlaceholderTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div>Fill me</div>
    `;
}
