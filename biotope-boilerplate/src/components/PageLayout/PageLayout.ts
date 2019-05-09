import Component from '@biotope/element';
import template from './template';
import GlyphHeadline from '../GlyphHeadline/GlyphHeadline';
import SimpleText from '../SimpleText/SimpleText';

interface PageLayoutProps {

}

interface PageLayoutState {

}

class PageLayout extends Component<PageLayoutProps, PageLayoutState> {
    static componentName = 'page-layout';
    static dependencies = [GlyphHeadline, SimpleText as any];

    render() {
        return template(this.html, {});
    }
}

export default PageLayout;
