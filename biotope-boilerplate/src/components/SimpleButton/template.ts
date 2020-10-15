import * as styles from './styles.scss';

interface SimpleButtonTemplateData {
    link: string;
}

export default (render: Function, data: SimpleButtonTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <a href=${data.link} target="_blank"><button class="sb sb__draw"><slot></button></a>
    `;
}
