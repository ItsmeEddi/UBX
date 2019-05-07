import Component from '@biotope/element';
import template from './template';

interface SpeakerBoxProps {
    firstName: string;
    lastName: string;
    image: string;
    jobInfo: string;
    description: string;
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
        console.log(this);
        const speakerDescriptionEl = this.shadowRoot.querySelector('.speaker__description');
        speakerDescriptionEl.classList.toggle('speaker__description--open');
    }

    get defaultProps() {
        return {
            firstName: "Tom",
            lastName: "De Bruyne",
            image: "resources/img/UBX19_deBruyn.png",
            jobInfo: "Founder & Creative Director",
            description: 'Tom De Bruyne is an expert in persuasion design, persuasion psychology, marketing strategy, and innovation. Using behavioural methods, he creates opportunities for brands and organisations to connect with consumers in a new context. His credo: "In order to convince, you have to think ideas the other way round". At UBX, he will be demonstrating what this means.'
        }
    }

    render() {
        return template(this.html, { ...this.props, toggleOpen: this.contentToggle });
    }
}

export default SpeakerBox;
