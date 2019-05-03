import * as styles from './styles.scss';

interface SimpleButtonTemplateData {
    link: string;
}

export default (render: Function, data: SimpleButtonTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <a href=${data.link}><button class="simple-button simple-button__draw"><slot></button></a>
    `;
}
