import Component from '@biotope/element';
import template from './template';
import SimpleHeadline from '../SimpleHeadline/SimpleHeadline';
import EventDate from '../EventDate/EventDate';
import SimpleText from '../SimpleText/SimpleText';
import SimpleButton from '../SimpleButton/SimpleButton';

interface RootInfoProps {

}

interface RootInfoState {

}

class RootInfo extends Component< RootInfoProps, RootInfoState > {
    static componentName = 'root-info';
    static dependencies = [SimpleHeadline, EventDate, SimpleText, SimpleButton  as any];

    render() {
        return template(this.html, {});
    }
}

export default RootInfo;
