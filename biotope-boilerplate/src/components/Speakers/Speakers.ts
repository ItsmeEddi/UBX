import Component from '@biotope/element';
import template from './template';
import SpeakerBox from '../SpeakerBox/SpeakerBox';

interface SpeakersProps {

}

interface SpeakersState {

}

class Speakers extends Component<SpeakersProps, SpeakersState> {
    static componentName = 'x-speakers';
    static dependencies = [SpeakerBox as any];

    render() {
        return template(this.html, {});
    }
}

export default Speakers;
