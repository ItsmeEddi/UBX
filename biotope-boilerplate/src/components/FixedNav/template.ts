import * as styles from './styles.scss';
import * as logo from './vi-logo.svg';

interface FixedNavTemplateData {

}

export default (render: Function, data: FixedNavTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <nav class="navbar">
            <div class="navbar__container">
                <span class="navbar__toggle">
                    <svg height="32" width="32" xmlns="http://www.w3.org/2000/svg">
                        <path id="line-one" d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24"/>
                        <path id="line-two" d="M4 20h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24"/>
                        <path id="line-three" d="M4 30h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24"/>
                    </svg>
                </span>
                <a href="#" class="navbar__logo" aria-label="logo and back to top">${{ html: logo }}</a>
                <ul class="navbar__main-nav">
                    <li>
                        <a href="#speaker" class="navbar__links">Speakers</a>
                    </li>
                    <li>
                        <a href="#schedule" class="navbar__links">Schedule</a>
                    </li>
                    <li>
                        <a href="#location" class="navbar__links">Location</a>
                    </li>
                    <li>
                        <a href="#events" class="navbar__links">Previous years</a>
                    </li>
                    <li>
                        <a href="#registration" class="navbar__links">Apply now</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
}
