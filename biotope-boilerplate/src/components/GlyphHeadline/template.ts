import * as styles from './styles.scss';

interface GlyphHeadlineTemplateData {
    headlineCharacters: string[],
    headlineItem: string
}

export default (render: Function, data: GlyphHeadlineTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <h2 class="glyph-headline">
            <ul class="glyph-headline__letter-list">
                <li aria-label="${data.headlineItem}">
                    ${data.headlineCharacters.map(character => `<span class="glyph-headline__letter" aria-hidden="true" data-initial="${character}" aria-label="${character}" >${character}</span>`)}
                </li>
            </ul>
        </h2>
   `;
}