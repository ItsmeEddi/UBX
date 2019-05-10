import Component from '@biotope/element';
import template from './template';

import GlyphHeadline from '../GlyphHeadline/GlyphHeadline';
import SchedulePlaceholder from '../SchedulePlaceholder/SchedulePlaceholder';

interface RootScheduleProps {

}

interface RootScheduleState {

}

class RootSchedule extends Component< RootScheduleProps, RootScheduleState > {
    static componentName = 'root-schedule';
    static dependencies = [GlyphHeadline, SchedulePlaceholder as any];

    render() {
        return template(this.html, {});
    }
}

export default RootSchedule;
