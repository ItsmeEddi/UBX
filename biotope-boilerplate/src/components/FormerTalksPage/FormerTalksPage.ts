import Component from '@biotope/element';
import template from './template';
import SimpleHeadline from '../SimpleHeadline/SimpleHeadline';
import FormerTalk from '../FormerTalk/FormerTalk';

interface FormerTalksPageProps {

}

interface FormerTalksPageState {
    talkdata: any[];
}

class FormerTalksPage extends Component< FormerTalksPageProps, FormerTalksPageState > {
    static componentName = 'former-talks-page';
    static dependencies = [SimpleHeadline, FormerTalk as any];

    get defaultState() {
        return {
          talkdata: [{
              'year': 0,
          }]
        }
    }

    connectedCallback() {
        fetch('components/FormerTalksPage/talks.json')
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                this.setState({
                    talkdata: myJson
                  });
            });
    }

    render() {
        return template(this.html, { talkdata: this.state.talkdata });
    }
}

export default FormerTalksPage;
