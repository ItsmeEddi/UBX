import * as styles from './styles.scss';
import slidr from '../../../node_modules/vanillajs-slidr/slidr';

interface SlideShowTemplateData {

}

export default (render: Function, data: SlideShowTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div id="slider" style="display: block">
            <div data-slidr="one">apple</div>
            <div data-slidr="two">banana</div>
            <div data-slidr="three">coconut</div>
        </div>
        <script>
            ${ slidr.create('slider').start()}
        </script>
    `;
}
