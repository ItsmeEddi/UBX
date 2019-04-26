import * as styles from './styles.scss';

interface GoogleMapsTemplateData {

}

export default (render: Function, data: GoogleMapsTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="map-container">
            <div id="google-maps" class="map-container__map"></div>
        </div>
    `;
} 