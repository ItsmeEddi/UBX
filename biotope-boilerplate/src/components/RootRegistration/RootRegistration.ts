import Component from '@biotope/element';
import template from './template';

import GlyphHeadline from '../GlyphHeadline/GlyphHeadline';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import SimpleText from '../SimpleText/SimpleText';


interface RootRegistrationProps {

}

interface RootRegistrationState {

}

class RootRegistration extends Component< RootRegistrationProps, RootRegistrationState > {
    static componentName = 'root-registration';
    static dependencies = [GlyphHeadline, RegistrationForm, SimpleText as any];

    render() {
        return template(this.html, {});
    }
}

export default RootRegistration;
