import Component from '@biotope/element';
import template from './template';
import FixedNav from '../FixedNav/FixedNav';
import SimpleText from '../SimpleText/SimpleText';
import SimpleButton from '../SimpleButton/SimpleButton';

interface SnapLayoutProps {

}

interface SnapLayoutState {

}

class SnapLayout extends Component<SnapLayoutProps, SnapLayoutState> {
    static componentName = 'snap-layout';
    static dependencies = [FixedNav, SimpleText, SimpleButton as any];

    constructor() {
        super(false)
    }

    render() {
        return template(this.html, {});
    }
}

export default SnapLayout;
