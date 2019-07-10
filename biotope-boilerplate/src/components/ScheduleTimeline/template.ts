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
        headline: "09:00 Start & Tune In",
        illustration: clock,
        items: [
            {
                timeslot: "09:15",
                speaker: "speaker 1",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
            },
            {
                timeslot: "09:45",
                speaker: "speaker 2",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            }
        ]
    },
    {
        headline: "10:15 Coffee Break",
        illustration: bubbles,
        items: [
            {
                timeslot: "10:45",
                speaker: "speaker 3",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
            },
            {
                timeslot: "11:15",
                speaker: "speaker 4",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
            },
            {
                timeslot: "11:45",
                speaker: "speaker 5",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            }
        ]
    },
    {
        headline: "12:15 Lunch Break",
        illustration: mug,
        items: [
            {
                timeslot: "13:30",
                speaker: "speaker 6",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            },
            {
                timeslot: "14:00",
                speaker: "speaker 7",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            },
            {
                timeslot: "14:30",
                speaker: "speaker 8",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
            }
        ]
    },
    {
        headline: "15:00 Coffee Break",
        illustration: mug,
        items: [
            {
                timeslot: "15:30",
                speaker: "Doing Sessions",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
            },
            {
                timeslot: "17:00",
                speaker: "speaker 9",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt "
            }
        ]
    },
    {
        headline: "17:30 Get Together & Drinks",
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
                            <p class="schedule__name">${speaker}</p>
                            <simple-text>${description}</simple-text>
                        </div>
                    </li>
                `)}
            </ul>` : null}
        `)}
    `;
}