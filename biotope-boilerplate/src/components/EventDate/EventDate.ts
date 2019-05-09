import Component from '@biotope/element';
import template from './template';

interface EventDateProps {
    date: string;
    location: string;
}

interface EventDateState {

}

class EventDate extends Component<EventDateProps, EventDateState> {
    static componentName = 'event-date';
    static attributes = ['date', 'location']
    get defaultProps() {
        return {
            date: '',
            location: '',
        }
    }
    render() {
        return template(this.html, this.props);
    }
}

export default EventDate;
