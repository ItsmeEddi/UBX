import Component from "@biotope/element";
import template from "./template";

import FixedNav from "../FixedNav/FixedNav";
import RootInfo from "../RootInfo/RootInfo";
import RootSpeakers from "../RootSpeakers/RootSpeakers";
import RootLocation from "../RootLocation/RootLocation";
import RootSchedule from "../RootSchedule/RootSchedule";
import RootRegistration from "../RootRegistration/RootRegistration";
import VideoStage from "../VideoStage/VideoStage";
import MainFooter from "../MainFooter/MainFooter";

import SimpleText from "../SimpleText/SimpleText";
import SimpleButton from "../SimpleButton/SimpleButton";
import RootEvents from "../RootEvents/RootEvents";
import GlyphHeadline from "../GlyphHeadline/GlyphHeadline";
import SchedulePlaceholder from "../SchedulePlaceholder/SchedulePlaceholder";

class Conference extends Component<{}, {}> {
	static componentName = "x-conference";
	static dependencies = [
		RootInfo,
		RootLocation,
		RootSchedule,
		RootRegistration,
		FixedNav,
		SimpleText,
		SimpleButton,
		RootSpeakers,
		RootEvents,
		VideoStage,
		GlyphHeadline,
		MainFooter,
		SchedulePlaceholder as any
	];

	constructor() {
		super(false);
	}

	render() {
		return template(this.html, {});
	}
}

export default Conference;
