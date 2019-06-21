import * as styles from './styles.scss';

interface SimpleHeadlineTemplateData {

}

export default (render: Function, data: SimpleHeadlineTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <h2><slot></h2>
    `;
}
