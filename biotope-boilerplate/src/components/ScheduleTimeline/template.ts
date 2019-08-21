import * as styles from './styles.scss';
import { wire } from 'hyperhtml';
import * as clock from './clock.svg';
import * as mug from './mug.svg';
import * as bubbles from './bubbles.svg';
import * as mindblown from './mindblown.svg';

interface ScheduleTimelineTemplateData {

}

const scheduleData = [
    {
        headline: "09:00 Welcome & Tune In",
        illustration: clock,
        items: [
            {
                timeslot: "09:15",
                speaker: ["Tom de Bruyne"],
                description: "The Future of Innovation is Psychological"
            },
            {
                timeslot: "09:45",
                speaker: ["Dirk von Gehlen"],
                description: "Kulturpragmatismus"
            }
        ]
    },
    {
        headline: "10:15 Break",
        illustration: bubbles,
        items: [
            {
                timeslot: "10:45",
                speaker: ["Sudan Martin Jackson"],
                description: "The importance of Human-Human interactions in the Digital Age"
            },
            {
                timeslot: "11:15",
                speaker: [],
                description: "Paneldiskussion: Wie wird man zum Digital Leader?"
            }
        ]
    },
    {
        headline: "12:00 Lunch Break",
        illustration: mug,
        items: [
            {
                timeslot: "13:30",
                speaker: ["Bjørn Karmann & Tore Knudsen"],
                description: "Project Alias"
            },
            {
                timeslot: "14:00",
                speaker: ["Easy Jet Look & Book App | Dan Young", "My Skin Track UV | Anne-Kathrin Bedoy & Linda Schreurs", "Ubenwa App | Charles C. Onu"],
                description: "Cases"
            },
            {
                timeslot: "15:00",
                speaker: ["Dagmar Schuller", "Christian Greb", "Cindy Ricarda Roberts"],
                description: "Paneldiskussion"
            }
        ]
    },
    {
        headline: "15:30 Break",
        illustration: mug,
        items: [
            {
                timeslot: "16:00",
                speaker: [],
                description: "Doing Sessions"
            },
            {
                timeslot: "17:30",
                speaker: ["Sam Conniff"],
                description: "How to be more Pirate?"
            }
        ]
    },
    {
        headline: "18:00 Drink & Talk",
        illustration: mindblown,
    }
]

export default (render: Function, data: ScheduleTimelineTemplateData) => {
    return render`
        <style>${styles.toString()}</style>

        ${scheduleData.map(({ headline, items, illustration }) => wire()`
            <h4>
                ${headline}
                ${illustration ? wire()`${{html: illustration}}` : null}
            </h4>
            ${items ? wire()`<ul class="schedule">
                <li class="schedule__line"></li>
                ${items.map(({ timeslot, speaker, description}) => wire()`
                    <li class="schedule__item">
                        <div class="schedule__timeslot">${timeslot}</div>
                        <div class="schedule__dott"></div>
                        <div>
                            <p class="schedule__slot-description">${description}</p>
                            ${speaker.map(s => wire()`<simple-text>${s}</simple-text>`)}
                        </div>
                    </li>
                `)}
            </ul>` : null}
        `)}
    `;
}