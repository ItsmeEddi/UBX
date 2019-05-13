import Component from '@biotope/element';
import template from './template';
import GlyphHeadline from '../GlyphHeadline/GlyphHeadline';
import EventDate from '../EventDate/EventDate';
import SimpleText from '../SimpleText/SimpleText';
import SimpleButton from '../SimpleButton/SimpleButton';

interface RootInfoProps {

}

interface RootInfoState {

}

class RootInfo extends Component< RootInfoProps, RootInfoState > {
    static componentName = 'root-info';
    static dependencies = [GlyphHeadline, EventDate, SimpleText, SimpleButton  as any];

    render() {
        return template(this.html, {});
    }
}

export default RootInfo;
