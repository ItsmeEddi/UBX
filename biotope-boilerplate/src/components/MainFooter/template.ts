import * as styles from './styles.scss';

interface MainFooterTemplateData {

}

export default (render: Function, data: MainFooterTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <footer class="main-footer">
            <div class="main-footer__link-container">
                <img class="main-footer__logo"></img>
                <ul class="main-footer__links">
                    <li><a href="">Datenschutz</a></li>
                    <li><a href="">Impressum</a></li>
                </ul>
            </div>
            <div class="main-footer__social-media-container">
                <span>Follow us on</span>
                <ul>
                    <li><a href="">twitter</a></li>
                    <li><a href="">facebook</a></li>
                    <li><a href="">youtube</a></li>
                </ul>
            </div>
        </footer>
    `;
}