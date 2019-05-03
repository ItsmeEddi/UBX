import * as styles from './styles.scss';

interface AddressLabelTemplateData {

}

export default (render: Function, data: AddressLabelTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <div class="address-label">
            <div class="address-label__icon">
                placeholder icon
            </div>
            <div>
            <h3>Virtual Identity AG</h3>
            <simple-text>Isarwinkel 16<br>81379 Munich</simple-text>
            </div>
        </div>
    `;
}
