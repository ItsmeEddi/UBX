import Component from '@biotope/element';
import template from './template';
import GlyphHeadline from '../GlyphHeadline/GlyphHeadline';

interface SlideShowProps {

}

interface SlideShowState {

}

class SlideShow extends Component<SlideShowProps, SlideShowState> {
    static componentName = 'slide-show';
    static dependencies = [GlyphHeadline as any]

    render() {
        return template(this.html, {});
    }
}

export default SlideShow;
