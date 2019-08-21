import Component from '@biotope/element';
import template from './template';
import SimpleText from "../SimpleText/SimpleText";

interface ScheduleTimelineProps {

}

interface ScheduleTimelineState {

}

class ScheduleTimeline extends Component< ScheduleTimelineProps, ScheduleTimelineState > {
    static componentName = 'schedule-timeline';
    static dependencies = [SimpleText as any];

    render() {
        return template(this.html, {});
    }
}

export default ScheduleTimeline;
