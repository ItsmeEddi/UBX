import Component from '@biotope/element';
import template from './template';
import SimpleHeadline from '../SimpleHeadline/SimpleHeadline';
import SimpleText from '../SimpleText/SimpleText';
import AddressLabel from '../AddressLabel/AddressLabel';

interface RootLocationProps {

}

interface RootLocationState {

}

class RootLocation extends Component< RootLocationProps, RootLocationState > {
    static componentName = 'root-location';
    static dependencies = [SimpleHeadline, SimpleText, AddressLabel as any];

    render() {
        return template(this.html, {});
    }
}

export default RootLocation;
