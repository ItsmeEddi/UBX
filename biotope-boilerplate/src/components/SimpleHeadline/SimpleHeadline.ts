import Component from '@biotope/element';
import template from './template';

interface SimpleHeadlineProps {

}

interface SimpleHeadlineState {

}

class SimpleHeadline extends Component< SimpleHeadlineProps, SimpleHeadlineState > {
    static componentName = 'simple-headline';

    render() {
        return template(this.html, {});
    }
}

export default SimpleHeadline;
