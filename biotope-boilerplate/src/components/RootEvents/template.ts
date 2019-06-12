import * as styles from './styles.scss';
import { wire } from 'hyperhtml';

interface EventsTemplateData {

}

export default (render: Function, data: EventsTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="events twelve-column-grid">
            <simple-headline dark>FORMER TALKS</simple-headline>
        </div>
    `;
}