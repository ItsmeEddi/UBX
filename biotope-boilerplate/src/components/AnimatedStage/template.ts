import * as styles from './styles.scss';

interface AnimatedStageTemplateData {

}

export default (render: Function, data: AnimatedStageTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div id="lottie"></div>
    `;
}
