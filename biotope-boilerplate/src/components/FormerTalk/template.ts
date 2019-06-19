import * as styles from './styles.scss';

interface FormerTalkTemplateData {
        year: number;
    filter: string;
    title: string;
    prename: string;
    lastname: string;
    company: string;
    country: string;
    role: string;
    youtube: string;
}

export default (render: Function, data: FormerTalkTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="talk">
            <div class="talk__video">
                <iframe src="${data.youtube}" frameborder="0" allow="encrypted-media; gyroscope;" allowfullscreen></iframe>
            </div>
            <div class="talk__text">
            <h3>${data.title}</h3>
                <p class="talk__description">${data.prename} ${data.lastname}, ${data.role} at ${data.company}, ${data.country}</p>
                <p class="talk__year">at UBX ${data.year}</p>
            </div>
        </div>
    `;
}
