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

    constructor() {
        super();
        this.hideBanner = this.hideBanner.bind(this);
    }

    hideBanner() {
        function addClass() {
            // const banner = this.shadowRoot.querySelector('.cookie__wrapper-active');
            // banner.classList.add('cookie__wrapper-inactive');
            console.log('CLICK');
        };
        const allowButton = this.shadowRoot.querySelector('.cookie__button');
        allowButton.addEventListener('click', addClass);
    }

    render() {
        return template(this.html, { 
            ...this.props, 
            ...this.state, 
            ...this.methods,
            hideBanner: this.hideBanner
        }, 
        this.createStyle);
    }
}

export default CookieConfirmation;
