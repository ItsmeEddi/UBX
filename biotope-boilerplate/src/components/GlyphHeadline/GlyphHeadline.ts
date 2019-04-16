import Component from '@biotope/element';
import template from './template';
import * as Splitting from 'splitting';

interface GlyphHeadlineProps {

}

interface GlyphHeadlineState {

}

class GlyphHeadline extends Component<GlyphHeadlineProps, GlyphHeadlineState> {
    static componentName = 'glyph-headline';

    connectedCallback() {

        Splitting();

        var chars = ["$", "%", "#", "@", "&", "=", "*", "/"];
        var myNodeListOne = this.shadowRoot.querySelectorAll(".glyph-headline__hover");
        var myNodeListTwo = this.shadowRoot.querySelectorAll("span");

        [].forEach.call(myNodeListOne, function (item, i, array) {

            item.addEventListener("mouseenter", function () {
                [].forEach.call(myNodeListTwo, function (
                    item,
                    i
                ) {
                    var isEmpty = " " === item.textContent,
                        r = item.getBoundingClientRect().width;
                    var cnt = 0;
                    (item.style.width =
                        "" != item.style.width
                            ? item.style.width
                            : isEmpty ? "7px" : r < 1 ? "" : String(Math.floor(r)) + "px"),
                        (setTimeout(function () {
                            (item.innerHTML = chars[getRandomInt(0, chars.length - 1)]),
                                setTimeout(function () {
                                    (item.innerHTML = item.dataset.initial),
                                        (cnt += 1),
                                        cnt === chars.length - 1;
                                }, 120);
                        }, 40 * i));
                });
            });
        })

        function getRandomInt(t, e) {
            return Math.floor(Math.random() * (e - t + 1)) + t
        }
    }

    render() {
        return template(this.html, {});
    }
}

export default GlyphHeadline;
