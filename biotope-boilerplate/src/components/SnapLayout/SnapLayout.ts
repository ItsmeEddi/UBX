import Component from '@biotope/element';
import template from './template';
import FixedNav from '../FixedNav/FixedNav';
import SimpleText from '../SimpleText/SimpleText';
import SimpleButton from '../SimpleButton/SimpleButton';
import SpeakerBox from '../SpeakerBox/SpeakerBox';
import EventDate from '../EventDate/EventDate';

interface SnapLayoutProps {

}

interface SnapLayoutState {

}

class SnapLayout extends Component<SnapLayoutProps, SnapLayoutState> {
    static componentName = 'snap-layout';
    static dependencies = [FixedNav, SimpleText, SimpleButton, SpeakerBox, EventDate as any];

    constructor() {
        super(false)
    }

    render() {
        return template(this.html, {});
    }
}

export default SnapLayout;
