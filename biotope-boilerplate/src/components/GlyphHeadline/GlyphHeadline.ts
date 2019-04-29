import Component from '@biotope/element';
import template from './template';
import * as Splitting from 'splitting';

interface GlyphHeadlineProps {

}

interface GlyphHeadlineState {
    headlineCharacters: string[]
    headlineItem: string
}

class GlyphHeadline extends Component<GlyphHeadlineProps, GlyphHeadlineState> {
    static componentName = 'glyph-headline';

    constructor() {
        super();
        this.state = {
            headlineCharacters: [],
            headlineItem: ''
        }
    }

    connectedCallback() {
        const testHeadline = 'test headline';
        const characters = testHeadline.split('');
        this.setState({
            headlineCharacters: characters,
            headlineItem: testHeadline
        });
        
        this.splittingLogic();
    }

    splittingLogic() {
        Splitting();

        const chars = ["$", "%", "#", "@", "&", "=", "*", "/"];
        const headlines = this.shadowRoot.querySelectorAll("li");
        const letters = this.shadowRoot.querySelectorAll(".glyph-headline__letter");

        [].forEach.call(headlines, function (item, i, array) {

            item.addEventListener("mouseenter", ()=>{
                [].forEach.call(letters, (item, i)=>{
                    var cnt = 0;
                        (setTimeout(()=>{
                            (item.innerHTML = chars[getRandomInt(0, chars.length - 1)]),
                                setTimeout(()=>{
                                    (item.innerHTML = item.dataset.initial),
                                        (cnt += 1),
                                        cnt === chars.length - 1;
                                }, 150);
                        }, 40 * i));
                });
            });
        })

        const getRandomInt = (t, e)=>{
            return Math.floor(Math.random() * (e - t + 1)) + t;
        }
    }

    render() {
        return template(this.html, {
            headlineCharacters: this.state.headlineCharacters,
            headlineItem: this.state.headlineItem
        });
    }
}

export default GlyphHeadline;
