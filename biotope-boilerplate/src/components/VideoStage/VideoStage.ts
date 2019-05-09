import Component from '@biotope/element';
import template from './template';

interface VideoStageProps {
    subheadline: string;
    logo: string;
    preheadline: string;
    headline: string;
    videoUrl: string;
}

interface VideoStageState {

}

class VideoStage extends Component<VideoStageProps, VideoStageState> {
    static componentName = 'video-stage';

    static attributes = ['subheadline', 'logo', 'preheadline', 'headline', 'video-url']
    get defaultProps() {
        return {
            subheadline: '',
            logo: '',
            preheadline: '',
            headline: '',
            videoUrl: ''
        }
    }
    render() {

        return template(this.html, { ...this.props, cs: this.createStyle });
    }
}

export default VideoStage;
