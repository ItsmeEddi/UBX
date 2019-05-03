import Component from '@biotope/element';
import template from './template';

interface PastEventsProps {
    image: string;
    logo: string;
    description: string;
    link: string;
    linkText: string;
}

interface PastEventsState {

}

class PastEvents extends Component<PastEventsProps, PastEventsState> {
    static componentName = 'past-events';
    static attributes = ['image', 'logo', 'description', 'link', 'link-text']

    get defaultProps() {
        return {
            image: 'resources/img/ubx_18.jpg',
            logo: 'resources/img/ubx-18.svg',
            description: 'The UBX Conference 2018 took place on October 18 for the fourth time. Media scientists, data & cognitive scientists, artists and neuroscientists revealed completely new perspectives and showed best cases.',
            link: 'http://ubx.info/konferenz/ubx-rueckblick-videoarchiv/#heading-ubx18',
            linkText: 'UBX 2018'
        }
    }

    render() {
        return template(this.html, { ...this.props });
    }
}

export default PastEvents;
