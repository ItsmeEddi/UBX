import Component from '@biotope/element';
import template from './template';

import FixedNav from '../FixedNav/FixedNav';
import RootInfo from '../RootInfo/RootInfo';
import RootSpeakers from '../RootSpeakers/RootSpeakers';
import RootLocation from '../RootLocation/RootLocation';
import RootRegistration from '../RootRegistration/RootRegistration';
import VideoStage from '../VideoStage/VideoStage';
import MainFooter from '../MainFooter/MainFooter';

import SimpleText from '../SimpleText/SimpleText';
import SimpleButton from '../SimpleButton/SimpleButton';
import RootEvents from '../RootEvents/RootEvents';
import GlyphHeadline from '../GlyphHeadline/GlyphHeadline';
import SchedulePlaceholder from '../SchedulePlaceholder/SchedulePlaceholder';

interface SnapLayoutProps {

}

interface SnapLayoutState {

}

class SnapLayout extends Component<SnapLayoutProps, SnapLayoutState> {
    static componentName = 'snap-layout';
    static dependencies = [RootInfo, RootLocation, RootRegistration, FixedNav, SimpleText, SimpleButton, RootSpeakers, RootEvents, VideoStage, GlyphHeadline, MainFooter, SchedulePlaceholder as any];

    constructor() {
        super(false)
    }

    render() {
        return template(this.html, {});
    }
}

export default SnapLayout;
