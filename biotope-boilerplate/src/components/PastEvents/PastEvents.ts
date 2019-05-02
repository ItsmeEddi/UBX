import Component from '@biotope/element';
import template from './template';

interface PastEventsProps {

}

interface PastEventsState {

}

class PastEvents extends Component< PastEventsProps, PastEventsState > {
    static componentName = 'past-events';

    render() {
        return template(this.html, {});
    }
}

export default PastEvents;
