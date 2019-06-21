import Component from "@biotope/element";
import template from "./template";

interface AnimatedStageProps { }

interface AnimatedStageState { }

class AnimatedStage extends Component<AnimatedStageProps, AnimatedStageState> {
	static componentName = "animated-stage";

	render() {
		return template(this.html, {});
	}
}

export default AnimatedStage;
