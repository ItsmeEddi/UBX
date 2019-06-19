import Component from '@biotope/element';
import template from './template';

interface FormerTalkProps {
    year: number;
    filter: string;
    title: string;
    prename: string;
    lastname: string;
    company: string;
    country: string;
    role: string;
    youtube: string;
}

interface FormerTalkState {

}

class FormerTalk extends Component<FormerTalkProps, FormerTalkState> {
    static componentName = 'former-talk';
    static attributes = ['title', 'speaker', 'year', 'youtube', 'prename', 'lastname', 'company', 'country', 'role']

    get defaultProps() {
        return {
            "year": 0,
            "filter": '',
            "title": '',
            "prename": '',
            "lastname": '',
            "company": '',
            "country": '',
            "role": '',
            "youtube": ''
        }
    }

    render() {
        return template(this.html, { ...this.props });
    }
}

export default FormerTalk;
