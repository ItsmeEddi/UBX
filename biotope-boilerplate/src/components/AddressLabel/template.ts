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
            <a href="https://goo.gl/maps/ddpuXh7jRG2Uwamt6" target="_blank" class="al__route">plan route</a>
            </div>
        </div>
    `;
}
