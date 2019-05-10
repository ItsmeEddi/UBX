import Component from '@biotope/element';
import template from './template';
import * as lottie from 'lottie-web/build/player/lottie';

interface AnimatedStageProps {

}

interface AnimatedStageState {

}

class AnimatedStage extends Component<AnimatedStageProps, AnimatedStageState> {
    static componentName = 'animated-stage';

    connectedCallback() {

        lottie.loadAnimation({
            container: this.shadowRoot.getElementById('lottie'),
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'resources/js/ubx.json'
        });
    }

    render() {
        return template(this.html, {});
    }
}

export default AnimatedStage;
