import Component from '@biotope/element';
import template from './template';
import SimpleButton from '../SimpleButton/SimpleButton';

import { CookieConfirmationProps, CookieConfirmationState, CookieConfirmationMethods } from './defines';



class CookieConfirmation extends Component< CookieConfirmationProps, CookieConfirmationState > {
    static componentName = 'cookie-confirmation';
    static dependencies = [
		SimpleButton as any
	];

    static attributes = [

    ];

    public methods: CookieConfirmationMethods = {

    };
   
    get defaultState() {
        return {

        }
    }
  
    get defaultProps() {
        return {

        }
    }

    connectedCallback() {
        const cookieWrapper = this.shadowRoot.querySelector('.cookie__wrapper');
        const allowButton = this.shadowRoot.querySelector('.cookie__button');
        allowButton.addEventListener('click', removeBanner);
        function removeBanner() {
            cookieWrapper.parentNode.removeChild(cookieWrapper);
            setCookie("UBX-2019-CookieAcceptance", 365);
        };
        function setCookie(cname, exdays) {
            let d = new Date();
            let today = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            let expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + today + ";" + expires + ";path=/";
        };
        
        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(";");
            for(let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == " ") {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        };
        function checkCookie() {
            let username = getCookie("UBX-2019-CookieAcceptance");
            if (username != "") {
                removeBanner();
            }
        };
        checkCookie();
    }

    render() {
        return template(this.html, { 
            ...this.props, 
            ...this.state, 
            ...this.methods
        }, 
        this.createStyle);
    }
}

export default CookieConfirmation;
