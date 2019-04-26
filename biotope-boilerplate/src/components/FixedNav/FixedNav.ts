import Component from '@biotope/element';
import template from './template';

interface FixedNavProps {

}

interface FixedNavState {

}

class FixedNav extends Component< FixedNavProps, FixedNavState > {
    static componentName = 'fixed-nav';

    render() {
        return template(this.html, {});
    }
}

export default FixedNav;
