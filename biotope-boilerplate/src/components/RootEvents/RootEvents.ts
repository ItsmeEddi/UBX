import Component from '@biotope/element';
import template from './template';
import SimpleHeadline from '../SimpleHeadline/SimpleHeadline';
import PastEvents from '../PastEvents/PastEvents';

interface EventsProps {

}

interface EventsState {

}

class RootEvents extends Component<EventsProps, EventsState> {
    static componentName = 'root-events';
    static dependencies = [PastEvents, SimpleHeadline as any];

    render() {
        return template(this.html, {});
    }
}

export default RootEvents;
