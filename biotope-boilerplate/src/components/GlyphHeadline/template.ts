import * as styles from './styles.scss';

interface GlyphHeadlineTemplateData {

}

export default (render: Function, data: GlyphHeadlineTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <ul class="glyph-headline">
            <li>
                <a class="glyph-headline__hover" aria-label="GLYPH">
                <span aria-hidden="true" data-initial="G" aria-label="G" >G</span>
                <span aria-hidden="true" data-initial="L" aria-label="L" >L</span>
                <span aria-hidden="true" data-initial="Y" aria-label="Y" >Y</span>
                <span aria-hidden="true" data-initial="P" aria-label="P" >P</span>
                <span aria-hidden="true" data-initial="H" aria-label="H" >H</span>
                </a>
            </li>
        </ul>
   `;
}
