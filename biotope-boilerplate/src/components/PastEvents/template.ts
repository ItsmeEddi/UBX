import * as styles from './styles.scss';

interface PastEventsTemplateData {

}

export default (render: Function, data: PastEventsTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="past-events">
            
            <div class="past-events__content">
                <p>The UBX Conference 2018 took place on October 18 for the fourth time. Media scientists, data & cognitive scientists, artists and neuroscientists revealed completely new perspectives and showed best cases.</p>
                <a href="#"> > UBX 2018</a>
            </div>
        </div>
    `;
}
