import Component from '@biotope/element';
import template from './template';
import GlyphHeadline from '../GlyphHeadline/GlyphHeadline';
import SimpleText from '../SimpleText/SimpleText';

interface PageLayoutProps {
    headline: string;
}

interface PageLayoutState {

}

class PageLayout extends Component<PageLayoutProps, PageLayoutState> {
    static componentName = 'page-layout';
    static dependencies = [GlyphHeadline, SimpleText as any];

    static attributes = ['headline']

    get defaultProps() {
        return {
            headline: '',
        }
    }

    render() {
        return template(this.html, { headline: this.props.headline });
    }
}

export default PageLayout;
