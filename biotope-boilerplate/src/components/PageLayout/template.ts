import * as styles from './styles.scss';

interface PageLayoutTemplateData {

}

export default (render: Function, data: PageLayoutTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="page-layout">
            <h1><glyph-headline light>Test</glyph-headline></h1>
            <simple-text>Test</simple-text>
        </div>
    `;
}
