import Component from '@biotope/element';
import template from './template';
import FixedNav from '../FixedNav/FixedNav';

interface SnapLayoutProps {

}

interface SnapLayoutState {

}

class SnapLayout extends Component<SnapLayoutProps, SnapLayoutState> {
    static componentName = 'snap-layout';
    static dependencies = [FixedNav as any];

    constructor() {
        super(false)
    }

    render() {
        return template(this.html, {});
    }
}

export default SnapLayout;
