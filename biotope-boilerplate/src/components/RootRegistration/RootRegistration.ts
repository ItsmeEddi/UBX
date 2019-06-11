import Component from '@biotope/element';
import template from './template';

import SimpleHeadline from '../SimpleHeadline/SimpleHeadline';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import SimpleText from '../SimpleText/SimpleText';


interface RootRegistrationProps {

}

interface RootRegistrationState {

}

class RootRegistration extends Component< RootRegistrationProps, RootRegistrationState > {
    static componentName = 'root-registration';
    static dependencies = [SimpleHeadline, RegistrationForm, SimpleText as any];

    render() {
        return template(this.html, {});
    }
}

export default RootRegistration;
