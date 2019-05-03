import Component from '@biotope/element';
import template from './template';

interface SpeakersSectionProps {

}

interface SpeakersSectionState {

}

class SpeakersSection extends Component< SpeakersSectionProps, SpeakersSectionState > {
    static componentName = 'speakers-section';

    render() {
        return template(this.html, {});
    }
}

export default SpeakersSection;
