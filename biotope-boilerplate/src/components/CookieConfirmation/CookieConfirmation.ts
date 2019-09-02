import Component from '@biotope/element';
import template from './template';

import { CookieConfirmationProps, CookieConfirmationState, CookieConfirmationMethods } from './defines';



class CookieConfirmation extends Component< CookieConfirmationProps, CookieConfirmationState > {
    static componentName = 'cookie-confirmation';

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
        const cookieWrapper = this.shadowRoot.querySelector('.cookie__wrapper-active');
        const allowButton = this.shadowRoot.querySelector('.cookie__button');
        allowButton.addEventListener('click', displayNone);
        function displayNone() {
            cookieWrapper.classList.add('cookie__wrapper-inactive');
        };
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
