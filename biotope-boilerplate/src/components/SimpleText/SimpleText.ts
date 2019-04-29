import Component from '@biotope/element';
import template from './template';

interface SimpleTextProps {

}

interface SimpleTextState {

}

class SimpleText extends Component< SimpleTextProps, SimpleTextState > {
    static componentName = 'simple-text';

    render() {
        return template(this.html, {});
    }
}

export default SimpleText;
