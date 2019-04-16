import * as styles from './styles.scss';

interface SlideShowTemplateData {

}

export default (render: Function, data: SlideShowTemplateData) => {
	return render`
        <style>${styles.toString()}</style>
        <div class="container snap vertical">
	        <div class="section-1"><glyph-headline></glyph-headline></div>
	        <div class="section-2">
		<div class="container snap">
			<div class="section-3">Item 2</div>
			<div class="section-4">Item 3</div>
		</div>  
	    </div>
            <div class="section-5">Item 4</div>
        </div>
    `;
}
