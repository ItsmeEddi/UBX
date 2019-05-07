import Component from '@biotope/element';
import template from './template';
import PastEvents from '../PastEvents/PastEvents';

interface EventsProps {

}

interface EventsState {

}

class Events extends Component<EventsProps, EventsState> {
    static componentName = 'x-events';
    static dependencies = [PastEvents as any];

    render() {
        return template(this.html, {});
    }
}

export default Events;
