import * as styles from './styles.scss';

interface FixedNavTemplateData {

}

export default (render: Function, data: FixedNavTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div>Fill me</div>
    `;
}
