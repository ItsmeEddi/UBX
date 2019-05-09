import Component from '@biotope/element';
import template from './template';
import GlyphHeadline from '../GlyphHeadline/GlyphHeadline';
import SpeakerBox from '../SpeakerBox/SpeakerBox';

interface SpeakersProps {

}

interface SpeakersState {

}

class RootSpeakers extends Component<SpeakersProps, SpeakersState> {
    static componentName = 'root-speakers';
    static dependencies = [GlyphHeadline, SpeakerBox as any];

    render() {
        return template(this.html, {});
    }
}

export default RootSpeakers;
