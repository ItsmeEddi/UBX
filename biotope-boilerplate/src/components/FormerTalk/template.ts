import * as styles from './styles.scss';

interface FormerTalkTemplateData {

}

export default (render: Function, data: FormerTalkTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="talk">
            <div class="talk__video">
                <iframe src="https://www.youtube.com/embed/f9rnnS7w0bY?controls=0" frameborder="0" allow="encrypted-media; gyroscope;" allowfullscreen></iframe>
            </div>
            <div class="talk__text">
                <h3>Seeing AI App</h3>
                <p class="talk__description">Jürgen Wirtgen, Microsoft Deutschland</p>
                <p class="talk__year">at UBX 18</p>
            </div>
        </div>
    `;
}
