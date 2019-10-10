import * as styles from './styles.scss';
import { wire } from 'hyperhtml';

interface EventsTemplateData {

}

const talksData = [
    {
        year: "17",
        filter: "cases",
        title: "Less ads, more acts! Why brands should think human-first",
        prename: "Polle",
        lastname: "de Maagt",
        company: "Ministry of World Domination",
        country: "Belgium",
        role: "Prime Minister",
        youtube: "https://www.youtube.com/embed/ynruFgJRifQ"
    },
    {
        year: "#ubx18",
        filter: "cases",
        title: "AAMI Smart Plates",
        prename: "Michelle",
        lastname: "Martinis",
        company: "Suncorp Group",
        country: "Australia",
        role: "Executive Manager, AAMI Brand, Marketing & Customer Experience",
        youtube: "https://www.youtube.com/embed/GNO8LdDKF48"
    },
    {
        year: "17",
        filter: "cases",
        title: "Fleetlights - Why Direct Line Uses Drones to Fix Big Problems",
        prename: "Mark",
        lastname: "Evans",
        company: "Direct Line",
        country: "UK",
        role: "Marketing Director",
        youtube: "https://www.youtube.com/embed/u8--LPoMweM"
      },
]

export default (render: Function, data: EventsTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="events twelve-column-grid">
            <simple-headline light>FORMER TALKS</simple-headline>
            ${talksData.map(({ year, company, country, lastname, prename, youtube, role, title, filter}) => wire()`<former-talk year=${year} company=${company} country=${country} lastname="${lastname}" prename="${prename}" youtube="${youtube}" role="${role}" title="${title}" filter="${filter}"></former-talk>`)}
            <div class="link-container">
                <a href="http://ubx.info/konferenz/former-talks/" target="_blank">More videos<span class="arrow-right"></span></a>
            </div>
        </div>
    `;
}