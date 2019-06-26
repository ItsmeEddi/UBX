import * as styles from './styles.scss';
import { wire } from 'hyperhtml';

interface EventsTemplateData {

}

const talksData = [
    {
        year: "17",
        filter: "Cases",
        title: "Less ads, more acts! Why brands should think human-first",
        prename: "Polle",
        lastname: "de Maagt",
        company: "Ministry of World Domination",
        country: "Belgium",
        role: "Prime Minister",
        youtube: "https://www.youtube.com/embed/ynruFgJRifQ"
    },
    {
        year: "18",
        filter: "Cases",
        title: "Cool Emotions App",
        prename: "Gustavo Ernesto",
        lastname: "Astiazarán Elías",
        company: "DOC.com (formerly Docademic)",
        country: "Mexico",
        role: "Chief Marketing Officer",
        youtube: "https://www.youtube.com/embed/ETjA7r3JxBo"
    },
    {
        year: "17",
        filter: "Cases",
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
            <simple-headline dark>FORMER TALKS</simple-headline>
            ${talksData.map(({ year, company, country, lastname, prename, youtube, role, title, filter}) => wire()`<former-talk year=${year} company=${company} country=${country} lastname="${lastname}" prename="${prename}" youtube="${youtube}" role="${role}" title="${title}" filter="${filter}"></former-talk>`)}
            <div class="link-container">
                <a href="https://www.youtube.com/user/virtualidentityag/videos" target="_blank">More videos<span class="arrow-right"></span></a>
            </div>
        </div>
    `;
}