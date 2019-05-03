import * as styles from './styles.scss';

interface SpeakersSectionTemplateData {

}

export default (render: Function, data: SpeakersSectionTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div>Fill me</div>
    `;
}
