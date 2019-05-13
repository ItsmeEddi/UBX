import * as styles from './styles.scss';

interface RootLocationTemplateData {

}

export default (render: Function, data: RootLocationTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="location twelve-column-grid">
            <glyph-headline light>Location</glyph-headline>
            <address-label></address-label>
            <google-maps></google-maps>
        </div>
    `;
}
