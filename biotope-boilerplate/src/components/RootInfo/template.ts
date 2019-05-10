import * as styles from './styles.scss';

interface RootInfoTemplateData {

}

export default (render: Function, data: RootInfoTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="info twelve-column-grid">
            <glyph-headline dark>UBX 2019</glyph-headline>
            <event-date></event-date>
            <simple-text>What role does Useful Brand Experience play in redefining digital business? Under the motto "Creating Digital Opportunities", UBX19 presents how the power and diversity of digital solutions and processes can be used to create rewarding brand experiences. UBX19 combines inspiring keynotes and innovative digitisation cases from all over the world.</simple-text>
            <simple-button link="#registration">Registration</simple-button>
        </div>
    `;
}
