import Component from '@biotope/element';
import template from './template';
import SimpleButton from '../SimpleButton/SimpleButton';
import { getCookie, setCookie } from './cookieHandling';

import { CookieConfirmationProps, CookieConfirmationState, CookieConfirmationMethods } from './defines';

const UBX_COOKIE = 'UBX-2019-CookieAcceptance';

class CookieConfirmation extends Component<CookieConfirmationProps, CookieConfirmationState> {
    static componentName = 'cookie-confirmation';
    static dependencies = [
        SimpleButton as any
    ];

    get defaultState() {
        return {
            shown: !getCookie(UBX_COOKIE)
        }
    }

    get defaultProps() {
        return {

        }
    }
    public methods: CookieConfirmationMethods = {

        acceptCookie: () => {
            setCookie(UBX_COOKIE, 365);
            this.setState({
                shown: false
            })
        }
    };

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
