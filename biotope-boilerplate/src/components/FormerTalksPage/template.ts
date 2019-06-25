import * as styles from './styles.scss';
import { wire } from 'hyperhtml';
import { FormerTalksPageState } from './FormerTalksPage';
import filters from './talksFilter';

interface FormerTalksPageTemplateData {
    onFilterClick: Function;
    onClearClick: Function;
    state: FormerTalksPageState;
}

export default (render: Function, data: FormerTalksPageTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <fixed-nav fixed></fixed-nav>
        <div class="page-layout">
            <div class="page-layout__container">
                <h1><simple-headline>Former Talks</simple-headline></h1>
                <div class="page-layout__filter">
                    <ul>
                        ${filters.map(({prop, name}) => wire()`<li onclick=${data.onFilterClick} class=${data.state.filterInfo[prop] ? 'active' : null} id=${prop}>${name}</li>`)}
                    </ul>
                    <span onclick=${data.onClearClick} class="page-layout__clear">clear all filter</span>
                </div>
                ${data.state.visibleTalks.map(({ year, company, country, lastname, prename, youtube, role, title, filter}) => wire()`<former-talk year=${year} company=${company} country=${country} lastname="${lastname}" prename="${prename}" youtube="${youtube}" role="${role}" title="${title}" filter="${filter}"></former-talk>`)}
                
                <div class="page-layout__apply-container">
                    <simple-headline lowercase>Be part of UBX19 on October 17. Apply now by writing us why you want to join.</simple-headline>
                    <simple-button link="/konferenz/#registration">Apply now</simple-button>
                </div>
            </div>
        </div>
        <main-footer></main-footer>
        `;
}