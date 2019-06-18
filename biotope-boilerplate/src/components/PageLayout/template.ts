import * as styles from './styles.scss';

interface PageLayoutTemplateData {
    headline: string;
}

export default (render: Function, data: PageLayoutTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="page-layout">
            <div class="page-layout__container twelve-column-grid">
                <h1><simple-headline light>${data.headline}</simple-headline></h1>
                <simple-text><slot></slot></simple-text>
            </div>
        </div>
    `;
}
