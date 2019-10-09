import * as styles from './styles.scss';
import { wire } from 'hyperhtml';

interface RootBlogTemplateData {

}

const blogData = [
    {
        link: "https://medium.com/ubx-useful-brand-experiences/creativity-in-the-machine-age-die-maschine-als-muse-94c919b7c607",
        intro: "Article on medium",
        image: "https://miro.medium.com/max/1690/0*SyUFT8Myq9ssK_pl.jpg",
        title: "„Creativity in the Machine Age”: Die Maschine als Muse",
        lead: "Neue Technologien und neue Geräte — Maschinen übernehmen zunehmend menschliche Handlungen und Aufgaben. Dass das vielen Menschen Angst macht, ist nichts Neues.",
        time: "3 min read"
    },
    {
        link: "https://medium.com/ubx-useful-brand-experiences/advertising-non-sense-vom-sinn-und-unsinn-der-werbung-914e88018484",
        intro: "Article on medium",
        image: "https://miro.medium.com/max/1690/0*hAUI1hb9Cpk8fP9U.jpg",
        title: "„Advertising (Non-)Sense”: Vom Sinn und Unsinn der Werbung",
        lead: "Störende Video- und Filmunterbrechungen, Pop-Ups auf dem Smartphone oder eine viel zu große Masse an Newslettern — Werbung kann unglaublich nerven.",
        time: "4 min read"
    },
]

export default (render: Function, data: RootBlogTemplateData) => {
    return render`
        <style>${styles.toString()}</style>

        <div class="blog twelve-column-grid">
            <simple-headline dark>Blog</simple-headline>
            <div class="blog__list">
            ${blogData.map(({ link, intro, image, title, lead, time }) => wire()`
                <div class="blog__entry">
                    <a target="_blank" href="${link}">
                        <p class="blog__intro">${intro}</p>
                        <div class="blog__image"><img src="${image}" /></div>
                        <h3>${title}</h3>
                        <p class="blog__lead">${lead}</p>
                        <p class="blog__time">${time}</p>
                    </a>
                </div>
            `)}
            </div>
            <div class="link-container">
                <a href="https://medium.com/ubx-useful-brand-experiences/" target="_blank">More on Medium<span class="arrow-right"></span></a>
            </div>
        </div>
    `;
}