import * as styles from './styles.scss';

interface ScheduleTimelineTemplateData {

}

const scheduleData = [
    {
        headline: "09:00 Start & Tune In",
        item: {
            timeslot: "09:15",
            speaker: "speaker 1",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
        }
    }
]

export default (render: Function, data: ScheduleTimelineTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <h4>09:00 Start & Tune In</h4>
        <ul class="schedule">
            <li class="schedule__line"></li>
            <li class="schedule__item">
                <div class="schedule__timeslot">09:15</div>
                <div class="schedule__dott"></div>
                <div>
                    <p class="schedule__name">speaker 1</p>
                    <simple-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nulla voluptate, fugiat vel earum ducimus numquam nemo sunt, natus possimus debitis nobis iusto odit doloremque voluptatibus culpa aliquid modi itaque.</simple-text>
                </div>
            </li>
            <li class="schedule__item">
                <div class="schedule__timeslot">09:15</div>
                <div class="schedule__dott"></div>
                <div>
                    <p class="schedule__name">speaker 2</p>
                    <simple-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nulla voluptate, fugiat vel earum ducimus numquam nemo sunt, natus possimus debitis nobis iusto odit doloremque voluptatibus culpa aliquid modi itaque.</simple-text>
                </div>
            </li>
            <li class="schedule__item">
                <div class="schedule__timeslot">09:15</div>
                <div class="schedule__dott"></div>
                <div>
                    <p class="schedule__name">speaker 2</p>
                    <simple-text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nulla voluptate, fugiat vel earum ducimus numquam nemo sunt, natus possimus debitis nobis iusto odit doloremque voluptatibus culpa aliquid modi itaque.</simple-text>
                </div>
            </li>
        </ul>
    `;
}
