import Component from '@biotope/element';
import template from './template';
import getRandomInt from '../../resources/ts/getRandomInt';

interface GlyphHeadlineProps {
    dark: boolean;
    headline: string[];
}

interface GlyphHeadlineState {

}

class GlyphHeadline extends Component<GlyphHeadlineProps, GlyphHeadlineState> {
    static componentName = 'glyph-headline';
    static attributes = [{ name: 'headline', converter: (s) => s.split('') }, { name: 'dark', converter: () => true }];

    connectedCallback() {
        this.splittingLogic();
    }

    splittingLogic() {

        const chars = ["$", "%", "#", "@", "&", "=", "*", "/"];
        const letters = this.querySelectorAll("span");

        [...letters].forEach((item: HTMLElement, i) => {
            setTimeout(() => {
                item.innerHTML = chars[getRandomInt(0, chars.length - 1)];
                setTimeout(() => {
                    item.innerHTML = item.dataset.initial;
                }, 150);
            }, 40 * i);
        });
    }

    get defaultProps() {
        return {
            dark: false,
            headline: [],
        }
    }

    render() {
        return template(this.html, {
            headlineCharacters: this.props.headline,
            handleMouseEnter: this.splittingLogic,
        });
    }
}

export default GlyphHeadline;
