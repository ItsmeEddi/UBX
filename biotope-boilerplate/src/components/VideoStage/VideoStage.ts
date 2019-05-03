import Component from '@biotope/element';
import template from './template';

interface VideoStageProps {

}

interface VideoStageState {

}

class VideoStage extends Component< VideoStageProps, VideoStageState > {
    static componentName = 'video-stage';

    render() {
        return template(this.html, {});
    }
}

export default VideoStage;
