import * as styles from './styles.scss';

interface SimpleTextTemplateData {

}

export default (render: Function, data: SimpleTextTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <p class="simple-text"><slot></p>
    `;
}
