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
import CookieConfirmation from "../CookieConfirmation/CookieConfirmation";

import SimpleText from "../SimpleText/SimpleText";
import SimpleButton from "../SimpleButton/SimpleButton";
import RootEvents from "../RootEvents/RootEvents";
import SchedulePlaceholder from "../SchedulePlaceholder/SchedulePlaceholder";
import RootBlog from "../RootBlog/RootBlog";

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
		MainFooter,
		CookieConfirmation,
		SchedulePlaceholder as any,
		RootBlog
	];

	constructor() {
		super(false);
	}

	render() {
		return template(this.html, {});
	}
}

export default Conference;
