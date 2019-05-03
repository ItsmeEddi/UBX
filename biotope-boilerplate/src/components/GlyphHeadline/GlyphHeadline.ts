import Component from '@biotope/element';
import template from './template';
import getRandomInt from '../../resources/ts/getRandomInt';

interface GlyphHeadlineProps {

}

interface GlyphHeadlineState {
    
}

class GlyphHeadline extends Component<GlyphHeadlineProps, GlyphHeadlineState> {
    static componentName = 'glyph-headline';
    static attributes = [{name: 'dark', converter: () => true}];
    
    connectedCallback() {
        this.splittingLogic();
    }
    
    splittingLogic() {
        
        const chars = ["$", "%", "#", "@", "&", "=", "*", "/"];
        const headline = this.shadowRoot.querySelector("h2");
        const letters = headline.querySelectorAll("span");
        
        headline.addEventListener("mouseenter", ()=>{
            [...letters].forEach((item:HTMLElement, i)=>{
                setTimeout(()=>{
                    item.innerHTML = chars[getRandomInt(0, chars.length - 1)];
                    setTimeout(()=>{
                        item.innerHTML = item.dataset.initial;
                    }, 150);
                }, 40 * i);
            });
        });
    }
    
    render() {
        return template(this.html, {
            headlineCharacters: this.innerHTML.split('')
        });
    }
}

export default GlyphHeadline;
