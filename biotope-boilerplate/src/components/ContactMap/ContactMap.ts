import Component from '@biotope/element';
import template from './template';

interface ContactMapProps {

}

interface ContactMapState {

}

class ContactMap extends Component< ContactMapProps, ContactMapState > {
    static componentName = 'contact-map';

    render() {
        return template(this.html, {});
    }
}

export default ContactMap;
