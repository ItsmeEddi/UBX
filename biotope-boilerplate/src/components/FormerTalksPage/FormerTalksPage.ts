import Component from '@biotope/element';
import template from './template';
import SimpleHeadline from '../SimpleHeadline/SimpleHeadline';
import SimpleButton from '../SimpleButton/SimpleButton';
import FormerTalk from '../FormerTalk/FormerTalk';
import filters from './talksFilter';
import FixedNav from "../FixedNav/FixedNav";
import MainFooter from "../MainFooter/MainFooter";

interface FormerTalksPageProps {

}

export interface FormerTalksPageState {
    talkData: any[];
    filterInfo: {
        [filterId: string]: boolean
    };
    visibleTalks: any[];
}

class FormerTalksPage extends Component< FormerTalksPageProps, FormerTalksPageState > {
    static componentName = 'former-talks-page';
    static dependencies = [SimpleHeadline, FormerTalk, MainFooter, FixedNav, SimpleButton as any];

    constructor() {
        super();
        this.onFilterClick = this.onFilterClick.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
    }

    get defaultState() {
        return {
          talkData: [],
          filterInfo: filters.reduce((aggr, filter) => ({
            ...aggr,
            [filter.prop]: false
          }),{}),
          visibleTalks: []
        }
    }

    connectedCallback() {
        fetch('components/FormerTalksPage/talks.json')
            .then(response => {
                return response.json();
            })
            .then(myJson => {
                this.setState({
                    talkData: myJson
                  });
                this.onFilterChange();
            });
    }

    onFilterClick(e) {
        this.setState({
            filterInfo: {
                ...this.state.filterInfo,
                [e.target.id]: !this.state.filterInfo[e.target.id]
            },
        } as FormerTalksPageState);
        this.onFilterChange();
    }

    onFilterChange() {
        this.setState({
            visibleTalks: Object.values(this.state.filterInfo).some(item => item) ? this.state.talkData.filter(item => this.state.filterInfo[item.filter]) : this.state.talkData
        })
    }

    onClearClick(e) {
        this.setState({
            filterInfo: filters.reduce((aggr, filter) => ({
                ...aggr,
                [filter.prop]: false
                }),{})
        })
        this.onFilterChange();
    }

    render() {
        return template(this.html, { 
            state: this.state,
            onFilterClick: this.onFilterClick,
            onClearClick: this.onClearClick,
        });
    }
}

export default FormerTalksPage;
