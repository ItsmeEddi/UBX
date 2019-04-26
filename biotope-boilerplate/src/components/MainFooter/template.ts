import * as styles from './styles.scss';

interface MainFooterTemplateData {

}

export default (render: Function, data: MainFooterTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <footer class="main-footer"></footer>
    `;
}