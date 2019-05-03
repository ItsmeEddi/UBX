import Component from '@biotope/element';
import template from './template';

interface SchedulePlaceholderProps {

}

interface SchedulePlaceholderState {

}

class SchedulePlaceholder extends Component< SchedulePlaceholderProps, SchedulePlaceholderState > {
    static componentName = 'schedule-placeholder';

    render() {
        return template(this.html, {});
    }
}

export default SchedulePlaceholder;
