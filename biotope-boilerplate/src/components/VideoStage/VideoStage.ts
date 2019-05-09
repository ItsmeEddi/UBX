import Component from '@biotope/element';
import template from './template';
import AnimatedStage from '../AnimatedStage/AnimatedStage';

interface VideoStageProps {

}

interface VideoStageState {

}

class VideoStage extends Component<VideoStageProps, VideoStageState> {
    static componentName = 'video-stage';
    static dependencies = [AnimatedStage as any];

    render() {
        return template(this.html, {});
    }
}

export default VideoStage;
