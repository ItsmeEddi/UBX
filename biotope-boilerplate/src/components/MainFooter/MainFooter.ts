import Component from '@biotope/element';
import template from './template';

interface MainFooterProps {

}

interface MainFooterState {

}

class MainFooter extends Component< MainFooterProps, MainFooterState > {
    static componentName = 'main-footer';

    render() {
        return template(this.html, {});
    }
}

export default MainFooter;
