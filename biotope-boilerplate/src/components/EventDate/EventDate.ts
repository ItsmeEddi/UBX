import Component from '@biotope/element';
import template from './template';

interface EventDateProps {

}

interface EventDateState {

}

class EventDate extends Component< EventDateProps, EventDateState > {
    static componentName = 'event-date';

    render() {
        return template(this.html, {});
    }
}

export default EventDate;
