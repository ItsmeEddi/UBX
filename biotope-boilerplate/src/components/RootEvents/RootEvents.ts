import Component from '@biotope/element';
import template from './template';
import GlyphHeadline from '../GlyphHeadline/GlyphHeadline';
import PastEvents from '../PastEvents/PastEvents';

interface EventsProps {

}

interface EventsState {

}

class RootEvents extends Component<EventsProps, EventsState> {
    static componentName = 'root-events';
    static dependencies = [PastEvents, GlyphHeadline as any];

    render() {
        return template(this.html, {});
    }
}

export default RootEvents;
