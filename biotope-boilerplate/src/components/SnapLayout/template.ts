import * as styles from './styles.scss';

interface SnapLayoutTemplateData {

}

export default (render: Function, data: SnapLayoutTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="snap-layout__container snap-layout__container--vertical">
            <div class="snap-layout__section dark-blue" >Item 1</div>
            <div class="snap-layout__section navi-blue">
                <div class="snap-layout__container">
                    <div class="snap-layout__section navi-blue">Item 2.1</div>
                    <div class="snap-layout__section navi-blue">Item 2.2</div>
                    <div class="snap-layout__section navi-blue">Item 2.3</div>
                </div>
            </div>
            <div class="snap-layout__section dark-blue">Item 3</div>
        </div>
    `;
}