import * as styles from './styles.scss';

interface GlyphHeadlineTemplateData {
    headlineCharacters: string[];
}

export default (render: Function, data: GlyphHeadlineTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <h2>
            ${data.headlineCharacters.map(character => `<span aria-hidden="true" data-initial="${character}" aria-label="${character}" >${character}</span>`)}
        </h2>
   `;
}