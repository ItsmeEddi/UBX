import * as styles from './styles.scss';
import { wire } from 'hyperhtml';

interface FormerTalksPageTemplateData {
    talkdata: any[];
}

export default (render: Function, data: FormerTalksPageTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="page-layout">
            <div class="page-layout__container">
                    <h1><simple-headline>Former Talks</simple-headline></h1>
                    <div class="dropdown-container">
                        <select>
                            <option value="all">All</option>
                            <option value="cases">Cases</option>
                            <option value="impulses">Impulses</option>
                            <option value="intervention">Intervention</option>
                            <option value="how to">How To</option>
                        </select>
                    </div>
                    ${data.talkdata.map(({ year, company, country, lastname, prename, youtube, role, title, filter}) => wire()`<former-talk year=${year} company=${company} country=${country} lastname="${lastname}" prename="${prename}" youtube="${youtube}" role="${role}" title="${title}" filter="${filter}"></former-talk>`)}
            </div>
        </div>`;
}
