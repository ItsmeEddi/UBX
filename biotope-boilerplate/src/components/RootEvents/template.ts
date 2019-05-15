import * as styles from './styles.scss';
import { wire } from 'hyperhtml';

interface EventsTemplateData {

}

const eventsData = [
    {
        image: 'resources/img/ubx_18.jpg',
        logo: 'resources/img/ubx-18.svg',
        description: 'The UBX Conference 2018 took place on October 18 for the fourth time. Media scientists, data & cognitive scientists, artists and neuroscientists revealed completely new perspectives and showed best cases.',
        link: 'http://ubx.info/konferenz/ubx-rueckblick-videoarchiv/#heading-ubx18',
        linkText: 'UBX 2018'
    },
    {
        image: 'resources/img/ubx_17.jpg',
        logo: 'resources/img/ubx-17.svg',
        description: 'The UBX Conference on October 19 2017 brought together marketers, communicators, technology and digital enthusiasts as well as creative people who are all doers and dreamers of their industry.',
        link: 'http://ubx.info/konferenz/ubx-rueckblick-videoarchiv/#heading-ubx17',
        linkText: 'UBX 2017'
    },
    {
        image: 'resources/img/ubx_16.jpg',
        logo: 'resources/img/ubx-16.svg',
        description: 'Over 200 guests, 22 speakers and hundreds of small balls rolling out of a selfmade Twitter ball track - one ball per tweet rolled out.',
        link: 'http://ubx.info/konferenz/ubx-rueckblick-videoarchiv/#heading-ubx16',
        linkText: 'UBX 2016'
    },
    {
        image: 'resources/img/ubx_15.jpg',
        logo: 'resources/img/ubx-15.svg',
        description: "In 2015, the UBX conference kicked off to encourage brand decision-makers to think further about brand communication. UBX's approach is to think about communication from the perspective of the addressee rather than the sender.",
        link: 'http://ubx.info/konferenz/ubx-rueckblick-videoarchiv/#ubx2015',
        linkText: 'UBX 2015'
    },
]

export default (render: Function, data: EventsTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="events twelve-column-grid">
            <glyph-headline dark headline="Previous years"></glyph-headline>
            ${eventsData.map(({ image, logo, description, link, linkText }) => wire()`<past-events class="past-event" image=${image} logo=${logo} description=${description} link=${link} linkText=${linkText}></past-events>`)}
        </div>
    `;
}
