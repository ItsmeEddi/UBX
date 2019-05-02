import * as styles from './styles.scss';
import * as speaker from './UBX19_Conniff.png';

interface SpeakerBoxTemplateData {
    toggleOpen: Function;

}

export default (render: Function, data: SpeakerBoxTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="speaker">
            <img src="${speaker}">
            <div class="speaker__box-one"></div>
            <div class="speaker__box-two"></div>
            <h3 class="speaker__title">Tom De Bruyne</h3>
            <span class="speaker__job">Founder & Creative Director<br>SUE Behavioural Design</span>
            <i class="speaker__toggle" onclick="${data.toggleOpen}"></i>
            <p class="speaker__description">Test</p>
        </div>
    `;
}
