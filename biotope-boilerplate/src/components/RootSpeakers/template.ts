import * as styles from './styles.scss';
import { wire } from 'hyperhtml';

interface SpeakersTemplateData {

}

const speakersData = [
    {
        firstName: "Tom",
        lastName: "De Bruyne",
        image: "resources/img/UBX19_deBruyn.png",
        jobInfo: "Founder & Creative Director SUE Behavioural Design",
        description: 'Tom De Bruyne is an expert in persuasion design, persuasion psychology, marketing strategy, and innovation. Using behavioural methods, he creates opportunities for brands and organisations to connect with consumers in a new context. His credo: "In order to convince, you have to think ideas the other way round". At UBX, he will be demonstrating what this means.'
    },
    {
        firstName: "Dirk",
        lastName: "von Gehlen",
        image: "resources/img/UBX19_vonGehlen.png",
        jobInfo: "Diploma Journalist Sueddeutsche Zeitung",
        description: 'Dirk von Gehlen is an author, journalist, head of the Social Media/Innovation department at one of Germanys most important newspapers and has been researching the social consequences of digitisation for years. As the inventor of the "pragmatism principle" ¯\_(ツ)_/¯ he pleads for a culturally pragmatic approach to the new – which will be perfectly fitting into the spirit of UBX.'
    },
    {
        firstName: "Sam",
        lastName: "Conniff Allende",
        image: "resources/img/UBX19_Conniff.png",
        jobInfo: "Author & Serial Entrepreneur",
        description: 'Sam Conniff Allende is an award-winning serial entrepreneur and founder of start-ups. He advises governments, think tanks and brands from Red Bull to Unilever on CSR and has mentored thousands of young entrepreneurs. At UBX, the author of "Be More Pirate" opens the true and unimagined strategy of pirates as pioneers of change, leadership and social innovation.'
    },
    {
        firstName: "Sudan",
        lastName: "Jackson",
        image: "resources/img/UBX19_Sudan.png",
        jobInfo: "Manager Organisational & Cultural Development REWE Digital",
        description: "Sudan Jackson is responsible for the cultural and organisational development of REWE Digital's technology division. His work focuses on the active creation of a collaborative environment for the creation of modern, innovative, creative and customer-oriented solutions. At UBX, he lets us participate how one can be inspired every day to improve people's (working) lives."
    },
    {
        firstName: "Charles",
        lastName: "C. Uno",
        image: "resources/img/UBX19_Onu.png",
        jobInfo: "Founder & AI Research Lead Ubenwa Intelligence Solutions",
        description: 'Charles C. Uno has founded a company that applies AI and mobile technology to enable timely diagnosis of birth asphyxia from a newborn cry. He has over six years experience in the development of machine learning software for real-world health care problems such as breast cancer patient care and intensive care unit (ICU) monitoring. At UBX, he will share his passion about developing high impact technologies that address social challenges, especially in resource-poor settings.'
    },
]

export default (render: Function, data: SpeakersTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="speakers twelve-column-grid">
            <simple-headline light>Speakers</simple-headline>
            ${speakersData.map(({ firstName, lastName, image, jobInfo, description }) => wire()`<speaker-box firstName=${firstName} lastName=${lastName} image=${image} jobInfo=${jobInfo} description=${description}></speaker-box>`)}
        </div>
    `;
}
