import Component from '@biotope/element';
import template from './template';
import FixedNav from '../FixedNav/FixedNav';
import SimpleText from '../SimpleText/SimpleText';
import SimpleButton from '../SimpleButton/SimpleButton';
import EventDate from '../EventDate/EventDate';
import Speakers from '../Speakers/Speakers';
import Events from '../Events/Events';
import VideoStage from '../VideoStage/VideoStage';
import GlyphHeadline from '../GlyphHeadline/GlyphHeadline';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import AddressLabel from '../AddressLabel/AddressLabel';
import RegistrationForm from '../RegistrationForm/RegistrationForm';

interface SnapLayoutProps {

}

interface SnapLayoutState {

}

class SnapLayout extends Component<SnapLayoutProps, SnapLayoutState> {
    static componentName = 'snap-layout';
    static dependencies = [FixedNav, SimpleText, SimpleButton, Speakers, EventDate, Events, VideoStage, GlyphHeadline, GoogleMaps, AddressLabel, RegistrationForm as any];

    constructor() {
        super(false)
    }

    render() {
        return template(this.html, {});
    }
}

export default SnapLayout;
