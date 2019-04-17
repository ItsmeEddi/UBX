import * as styles from './styles.scss';

interface GlyphHeadlineTemplateData {
    headlineCharacters: string[],
    headlineItem: string
}

export default (render: Function, data: GlyphHeadlineTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <ul class="glyph-headline">
            <li class="glyph-headline__hover" aria-label="${data.headlineItem}">
                ${data.headlineCharacters.map(character => `<span aria-hidden="true" data-initial="${character}" aria-label="${character}" >${character}</span>`)}
            </li>
        </ul>
   `;
}