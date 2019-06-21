import Component from '@biotope/element';
import template from './template';

interface FixedNavProps {

}

interface FixedNavState {

}

class FixedNav extends Component<FixedNavProps, FixedNavState> {
    static componentName = 'fixed-nav';

    connectedCallback() {
        let navBar = this.shadowRoot.querySelector(".navbar");
        let mainNav = this.shadowRoot.querySelector(".navbar__main-nav");
        let navBarToggle = this.shadowRoot.querySelector(".navbar__toggle");

        navBarToggle.addEventListener("click", function () {
            this.classList.toggle("cross-animation");
            mainNav.classList.toggle("active");
        });

        document.addEventListener("scroll", function () {
            if (window.pageYOffset > 0) {
                navBar.classList.add("filled");
            }
            else {
                navBar.classList.remove("filled");
            }
        });
    }

    render() {
        return template(this.html, {});
    }
}

export default FixedNav;
