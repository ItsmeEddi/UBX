import Component from '@biotope/element';
import template from './template';

import SimpleHeadline from '../SimpleHeadline/SimpleHeadline';
import ScheduleTimeline from '../ScheduleTimeline/ScheduleTimeline';

interface RootScheduleProps {

}

interface RootScheduleState {

}

class RootSchedule extends Component< RootScheduleProps, RootScheduleState > {
    static componentName = 'root-schedule';
    static dependencies = [SimpleHeadline, ScheduleTimeline as any];

    render() {
        return template(this.html, {});
    }
}

export default RootSchedule;
