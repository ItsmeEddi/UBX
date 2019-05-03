import Component from '@biotope/element';
import template from './template';

interface FixedNavProps {

}

interface FixedNavState {

}

class FixedNav extends Component<FixedNavProps, FixedNavState> {
    static componentName = 'fixed-nav';

    connectedCallback() {
        let mainNav = this.shadowRoot.querySelector(".navbar__main-nav");
        let navBarToggle = this.shadowRoot.querySelector(".navbar__toggle");

        navBarToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");
        });
    }

    render() {
        return template(this.html, {});
    }
}

export default FixedNav;
