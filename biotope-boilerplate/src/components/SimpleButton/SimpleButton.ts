import Component from '@biotope/element';
import template from './template';

interface SimpleButtonProps {

}

interface SimpleButtonState {

}

class SimpleButton extends Component< SimpleButtonProps, SimpleButtonState > {
    static componentName = 'simple-button';

    render() {
        return template(this.html, {});
    }
}

export default SimpleButton;
