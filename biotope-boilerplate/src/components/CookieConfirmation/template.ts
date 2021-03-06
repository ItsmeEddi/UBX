import * as styles from './styles.scss';

import { CookieConfirmationProps, CookieConfirmationState, CookieConfirmationMethods } from './defines';
import Component from '@biotope/element';


export default (render: Function, data: CookieConfirmationProps & CookieConfirmationState & CookieConfirmationMethods , createStyle: Function) => {
    return render` ${createStyle(styles)}
    ${data.shown ? Component.wire()`<div class="cookie__wrapper">
    <div class="cookie__banner">
        <p class="cookie__text">This website uses cookies to ensure you get the best experience on our website. <a href="http://ubx.info/konferenz/datenschutz/" target="_blank">Learn more</a></p>
        <simple-button class="cookie__button" onclick=${data.acceptCookie}>Allow cookies</simple-button>
    </div>  
</div>` : ''}
`;
}
