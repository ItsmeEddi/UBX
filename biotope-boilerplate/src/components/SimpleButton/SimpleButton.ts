import Component from '@biotope/element';
import template from './template';

interface SimpleButtonProps {
    link: string;
}

interface SimpleButtonState {

}

class SimpleButton extends Component<SimpleButtonProps, SimpleButtonState> {
    static componentName = 'simple-button';
    static attributes = ['link']

    get defaultProps() {
        return {
            link: "#"
        }
    }

    render() {
        return template(this.html, { ...this.props });
    }
}

export default SimpleButton;
