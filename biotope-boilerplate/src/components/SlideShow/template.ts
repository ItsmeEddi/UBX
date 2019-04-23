import * as styles from './styles.scss';

interface SlideShowTemplateData {

}

export default (render: Function, data: SlideShowTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="slide-in">
            <div class="slide-in__element slide-in__top-layer"><h1>AY, CARAMBA!</h1></div>
            <div class="slide-in__element slide-in__trail-one"></div>
            <div class="slide-in__element slide-in__trail-two"></div>
            <div class="slide-in__element slide-in__trail-three"></div>
        </div>
    `;
}
