import Component from '@biotope/element';
import template from './template';

interface SpeakerBoxProps {

}

interface SpeakerBoxState {

}

class SpeakerBox extends Component<SpeakerBoxProps, SpeakerBoxState> {
    static componentName = 'speaker-box';

    contentToggle() {
        this.nextElementSibling.classList.toggle('speaker__description--open');
    }

    render() {
        return template(this.html, { toggleOpen: this.contentToggle });
    }
}

export default SpeakerBox;
