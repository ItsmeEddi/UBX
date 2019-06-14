import * as styles from './styles.scss';
import { wire } from 'hyperhtml';

interface EventsTemplateData {

}

const talksData = [
    {
        title: "In defense of useless brand experiences",
        speaker: "Polle deMaagt, Founder & Prime Minister at Ministry of World Domination",
        year: "18",
        youtube: "https://www.youtube.com/embed/oGCXX6wLWVY"
    },
    {
        title: "Cool Emotions App",
        speaker: "Gustavo Astiazarán Elías, Chief Marketing Officer at Doc.com",
        year: "18",
        youtube: "https://www.youtube.com/embed/U5ym66TGblU"
    },
    {
        title: "What is Artificial Intelligence and why is it relevant for business?",
        speaker: "Rand Hindi, CEO Snips",
        year: "17",
        youtube: "https://www.youtube.com/embed/CX6dKkLcK4k"
    },
]

export default (render: Function, data: EventsTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="events twelve-column-grid">
            <simple-headline dark>FORMER TALKS</simple-headline>
            ${talksData.map(({ title, speaker, year, youtube }) => wire()`<former-talk title=${title} speaker=${speaker} year=${year} youtube=${youtube}></former-talk>`)}
            <a href="https://www.youtube.com/user/virtualidentityag/videos" target="_blank">More videos<span class="arrow-right"></span></a>
        </div>
    `;
}