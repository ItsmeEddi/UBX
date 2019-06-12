import Component from '@biotope/element';
import template from './template';

interface FormerTalkProps {

}

interface FormerTalkState {

}

class FormerTalk extends Component< FormerTalkProps, FormerTalkState > {
    static componentName = 'former-talk';

    render() {
        return template(this.html, {});
    }
}

export default FormerTalk;
