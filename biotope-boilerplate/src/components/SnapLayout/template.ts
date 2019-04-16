import * as styles from './styles.scss';

interface SnapLayoutTemplateData {

}

export default (render: Function, data: SnapLayoutTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="snap-layout__container snap-layout__container--vertical">
            <div class="snap-layout__section section-1">Item 1</div>
            <div class="snap-layout__section section-2">
                <div class="snap-layout__container">
                    <div class="snap-layout__section section-3">Item 2.1</div>
                    <div class="snap-layout__section section-4">Item 2.2</div>
                    <div class="snap-layout__section section-5">Item 2.3</div>
                </div>
            </div>
        <div class="snap-layout__section section-6">Item 3</div>
        </div>
    `;
}