import Component from '@biotope/element';
import template from './template';

interface RootBlogProps {

}

interface RootBlogState {

}

class RootBlog extends Component< RootBlogProps, RootBlogState > {
    static componentName = 'root-blog';

    render() {
        return template(this.html, {});
    }
}

export default RootBlog;
