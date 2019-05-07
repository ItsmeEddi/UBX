import * as styles from './styles.scss';

interface ContactMapTemplateData {

}

export default (render: Function, data: ContactMapTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="map-frame">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.6846240490368!2d11.543016315425874!3d48.09702756196359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75eb96bfb00b%3A0x2cd12f60e6a5c63c!2sVirtual+Identity+AG+M%C3%BCnchen!5e0!3m2!1sde!2sde!4v1555594377261!5m2!1sde!2sde" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
        </div>
    `;
}
