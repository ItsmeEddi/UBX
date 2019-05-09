import Component from '@biotope/element';
import template from './template';

interface SpeakerBoxProps {
    firstName: string;
    lastName: string;
    image: string;
    jobInfo: string;
}

interface SpeakerBoxState {

}

class SpeakerBox extends Component<SpeakerBoxProps, SpeakerBoxState> {
    constructor() {
        super();
        this.contentToggle = this.contentToggle.bind(this);
    }
    static componentName = 'speaker-box';
    static attributes = ['first-name', 'last-name', 'image', 'job-info', 'description']

    contentToggle() {
        const speakerDescriptionEl = this.shadowRoot.querySelector('.speaker__description');
        speakerDescriptionEl.classList.toggle('speaker__description--open');
    }

    get defaultProps() {
        return {
            firstName: "Tom",
            lastName: "De Bruyne",
            image: "resources/img/UBX19_deBruyn.png",
            jobInfo: "Founder & Creative Director"
        }
    }

    render() {
        return template(this.html, { ...this.props, toggleOpen: this.contentToggle });
    }
}

export default SpeakerBox;
