import Component from '@biotope/element';
import template from './template';
import SimpleHeadline from '../SimpleHeadline/SimpleHeadline';
import AddressLabel from '../AddressLabel/AddressLabel';
import GoogleMaps from '../GoogleMaps/GoogleMaps';

interface RootLocationProps {

}

interface RootLocationState {

}

class RootLocation extends Component< RootLocationProps, RootLocationState > {
    static componentName = 'root-location';
    static dependencies = [SimpleHeadline, AddressLabel, GoogleMaps as any];

    render() {
        return template(this.html, {});
    }
}

export default RootLocation;
