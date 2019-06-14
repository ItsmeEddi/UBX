import Component from '@biotope/element';
import template from './template';

interface FormerTalkProps {
    title: string;
    speaker: string;
    year: string;
    youtube: string;
}

interface FormerTalkState {

}

class FormerTalk extends Component<FormerTalkProps, FormerTalkState> {
    static componentName = 'former-talk';
    static attributes = ['title', 'speaker', 'year', 'youtube']

    get defaultProps() {
        return {
            title: "",
            speaker: "",
            year: "",
            youtube: ""
        }
    }

    render() {
        return template(this.html, { ...this.props });
    }
}

export default FormerTalk;
