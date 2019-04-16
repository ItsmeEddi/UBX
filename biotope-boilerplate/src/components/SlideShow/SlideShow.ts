import Component from '@biotope/element';
import template from './template';
import slidr from '../../../node_modules/vanillajs-slidr/slidr';

interface SlideShowProps {

}

interface SlideShowState {

}

class SlideShow extends Component<SlideShowProps, SlideShowState> {
    static componentName = 'slide-show';

    render() {
        return template(this.html, {});
    }
}

export default SlideShow;
