import * as styles from './styles.scss';

interface SlideShowTemplateData {

}

export default (render: Function, data: SlideShowTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div>Fill me</div>
    `;
}
