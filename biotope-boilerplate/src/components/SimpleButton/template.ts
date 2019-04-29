import * as styles from './styles.scss';

interface SimpleButtonTemplateData {

}

export default (render: Function, data: SimpleButtonTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <a href="#registration"><button class="simple-button simple-button__draw"><slot></button></a>
    `;
}
