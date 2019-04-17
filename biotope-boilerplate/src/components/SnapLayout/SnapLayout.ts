import Component from '@biotope/element';
import template from './template';

interface SnapLayoutProps {

}

interface SnapLayoutState {

}

class SnapLayout extends Component< SnapLayoutProps, SnapLayoutState > {
    static componentName = 'snap-layout';

    render() {
        return template(this.html, {});
    }
}

export default SnapLayout;
