import * as styles from './styles.scss';

interface AddressLabelTemplateData {

}

export default (render: Function, data: AddressLabelTemplateData) => {
  return render`
        <style>${styles.toString()}</style>
        <div class="al">
            <div>
            <p class="al__address">
              Virtual Identity AG<br>
              Isarwinkel 16<br>
              81379 Munich
            </p>
            <a href="#" class="al__route">Route planen</a>
            </div>
        </div>
    `;
}
