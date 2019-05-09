import Component from '@biotope/element';
import template from './template';
import GlyphHeadline from '../GlyphHeadline/GlyphHeadline';
import AddressLabel from '../AddressLabel/AddressLabel';
import GoogleMaps from '../GoogleMaps/GoogleMaps';

interface RootLocationProps {

}

interface RootLocationState {

}

class RootLocation extends Component< RootLocationProps, RootLocationState > {
    static componentName = 'root-location';
    static dependencies = [GlyphHeadline, AddressLabel, GoogleMaps as any];

    render() {
        return template(this.html, {});
    }
}

export default RootLocation;
