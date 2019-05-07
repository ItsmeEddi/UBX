import Component from '@biotope/element';
import template from './template';
import SimpleText from '../SimpleText/SimpleText';

interface AddressLabelProps {

}

interface AddressLabelState {

}

class AddressLabel extends Component< AddressLabelProps, AddressLabelState > {
    static componentName = 'address-label';

    render() {
        return template(this.html, {});
    }
}

export default AddressLabel;
