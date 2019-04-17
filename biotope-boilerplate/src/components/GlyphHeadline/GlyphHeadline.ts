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
    
        const testHeadline = 'TEST HEADLINE';
        const characters = testHeadline.split('');
        this.setState({
            headlineCharacters: characters,
            headlineItem: testHeadline
        });
        
        this.splittingLogic();
    }

    splittingLogic() {
        Splitting();

        var chars = ["$", "%", "#", "@", "&", "=", "*", "/"];
        var myNodeListOne = this.shadowRoot.querySelectorAll(".glyph-headline__hover");
        var myNodeListTwo = this.shadowRoot.querySelectorAll("span");

        [].forEach.call(myNodeListOne, function (item, i, array) {

            item.addEventListener("mouseenter", ()=>{
                [].forEach.call(myNodeListTwo, (
                    item,
                    i
                )=>{
                    var isEmpty = " " === item.textContent,
                        r = item.getBoundingClientRect().width;
                    var cnt = 0;
                    (item.style.width =
                        "" != item.style.width
                            ? item.style.width
                            : isEmpty ? "7px" : r < 1 ? "" : String(Math.floor(r)) + "px"),
                        (setTimeout(()=>{
                            (item.innerHTML = chars[getRandomInt(0, chars.length - 1)]),
                                setTimeout(()=>{
                                    (item.innerHTML = item.dataset.initial),
                                        (cnt += 1),
                                        cnt === chars.length - 1;
                                }, 120);
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
