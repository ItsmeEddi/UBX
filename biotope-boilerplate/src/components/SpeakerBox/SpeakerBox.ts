import Component from '@biotope/element';
import template from './template';

interface SpeakerBoxProps {

}

interface SpeakerBoxState {

}

class SpeakerBox extends Component< SpeakerBoxProps, SpeakerBoxState > {
    static componentName = 'speaker-box';

    render() {
        return template(this.html, {});
    }
}

export default SpeakerBox;
