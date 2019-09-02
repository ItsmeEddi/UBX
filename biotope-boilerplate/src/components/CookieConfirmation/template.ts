import * as styles from './styles.scss';

import { CookieConfirmationProps, CookieConfirmationState, CookieConfirmationMethods } from './defines';


export default (render: Function, data: CookieConfirmationProps & CookieConfirmationState & CookieConfirmationMethods , createStyle: Function) => {
    return render` ${createStyle(styles)}
<div class="cookie__wrapper-active">
    <button class="cookie__button">Allow cookies</button>
    <p class="cookie__text">This website uses cookies to ensure you get the best experience on our website. <a href="http://ubx.info/konferenz/datenschutz/" target="_blank">Learn more</a><sup>&#x2197;</sup>.</p>
</div>`;
}
