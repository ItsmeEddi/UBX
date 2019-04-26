import * as styles from './styles.scss';
import speakerImage from './images/test-speaker.png';

interface SpeakerBoxTemplateData {

}

export default (render: Function, data: SpeakerBoxTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="speaker">
            <div class="speaker__box-one"></div>
            <div class="speaker__box-two"></div>
            <h3 class="speaker__title">Tom De Bruyne</h3>
            <span class="speaker__job">Founder & Creative Director<br>SUE Behavioural Design</span>
            <p class="speaker__description">Test</p>
        </div>
    `;
}
