import * as styles from './styles.scss';

interface MainFooterTemplateData {

}

export default (render: Function, data: MainFooterTemplateData) => {
    return render`
        <style>${styles.toString()}</style>
        <footer class="mf">
            <div class="mf__container">
                <div class="mf__link-container">
                    <a href="https://www.virtual-identity.com/" target="_blank" rel="noreferrer" aria-label="link to Virtual Identity">
                        <svg class="mf__vi-logo" viewBox="0 0 330 139">
                            <path d="M130.23 81.5381L124.88 65.8981H129.39L132.68 76.5681H132.75L136 65.8981H140.27L135 81.5381H130.23Z" fill="white"/>
                            <path d="M142.21 63.4781V59.9381H146.51V63.4781H142.21ZM146.51 65.8981V81.5381H142.21V65.8981H146.51Z" fill="white"/>
                            <path d="M154 65.8981V68.7981C154.211 68.3132 154.487 67.8591 154.82 67.4481C155.163 67.0594 155.56 66.7226 156 66.4481C156.442 66.1527 156.924 65.9205 157.43 65.7581C157.938 65.5966 158.467 65.5156 159 65.5181C159.316 65.522 159.63 65.576 159.93 65.6781V69.6781C159.73 69.6781 159.49 69.5981 159.21 69.5681C158.937 69.5536 158.663 69.5536 158.39 69.5681C157.703 69.5479 157.019 69.6812 156.39 69.9581C155.872 70.2009 155.421 70.5685 155.08 71.0281C154.736 71.5035 154.495 72.0448 154.37 72.6181C154.223 73.2745 154.153 73.9456 154.16 74.6181V81.6681H149.86V65.8981H154Z" fill="white"/>
                            <path d="M170.86 65.8981V68.7681H167.72V76.5181C167.654 77.0294 167.783 77.5468 168.08 77.9681C168.503 78.2618 169.019 78.3899 169.53 78.3281C169.77 78.3281 170 78.3281 170.22 78.3281C170.435 78.31 170.649 78.2799 170.86 78.2381V81.5681C170.459 81.6323 170.055 81.6724 169.65 81.6881H168.35C167.717 81.6889 167.086 81.6421 166.46 81.5481C165.907 81.4769 165.373 81.2968 164.89 81.0181C164.428 80.7583 164.053 80.369 163.81 79.8981C163.526 79.3063 163.392 78.6538 163.42 77.9981V68.7681H160.82V65.8981H163.42V61.2081H167.72V65.8981H170.86Z" fill="white"/>
                            <path d="M183.51 81.5381V79.3581H183.42C182.938 80.2284 182.197 80.9273 181.3 81.3581C180.47 81.7581 179.561 81.9665 178.64 81.9681C177.677 81.9999 176.716 81.8471 175.81 81.5181C175.126 81.2497 174.526 80.8045 174.07 80.2281C173.629 79.6353 173.325 78.9523 173.18 78.2281C172.995 77.3605 172.908 76.475 172.92 75.5881V65.8981H177.22V74.7281C177.155 75.7279 177.362 76.7267 177.82 77.6181C178.063 77.9512 178.39 78.2144 178.768 78.3812C179.145 78.548 179.56 78.6124 179.97 78.5681C180.442 78.6142 180.919 78.5475 181.36 78.3737C181.802 78.1999 182.196 77.9238 182.51 77.5681C183.116 76.5321 183.389 75.3344 183.29 74.1381V65.9381H187.59V81.5781L183.51 81.5381Z" fill="white"/>
                            <path d="M191.43 68.1981C191.868 67.5398 192.449 66.9894 193.13 66.5881C193.846 66.1729 194.627 65.8821 195.44 65.7281C196.293 65.557 197.16 65.4699 198.03 65.4681C198.83 65.471 199.628 65.5278 200.42 65.6381C201.186 65.7392 201.931 65.9584 202.63 66.2881C203.278 66.5949 203.838 67.059 204.26 67.6381C204.713 68.3093 204.938 69.109 204.9 69.9181V78.1081C204.9 78.7765 204.94 79.4444 205.02 80.1081C205.06 80.6149 205.203 81.1083 205.44 81.5581H201.08C201.001 81.3156 200.938 81.0684 200.89 80.8181C200.838 80.5605 200.801 80.3 200.78 80.0381C200.115 80.7346 199.281 81.2478 198.36 81.5281C197.439 81.8064 196.482 81.948 195.52 81.9481C194.814 81.9542 194.111 81.8633 193.43 81.6781C192.815 81.5117 192.24 81.2226 191.74 80.8281C191.249 80.4434 190.858 79.946 190.6 79.3781C190.315 78.7189 190.175 78.0061 190.19 77.2881C190.162 76.5304 190.324 75.7776 190.66 75.0981C190.947 74.5479 191.362 74.0747 191.87 73.7181C192.385 73.3664 192.957 73.106 193.56 72.9481C194.196 72.777 194.84 72.6401 195.49 72.5381C196.13 72.4381 196.77 72.3581 197.39 72.2981C197.952 72.2486 198.511 72.1584 199.06 72.0281C199.477 71.9352 199.869 71.7546 200.21 71.4981C200.35 71.3746 200.459 71.2194 200.526 71.0454C200.594 70.8715 200.62 70.6838 200.6 70.4981C200.616 70.118 200.537 69.7398 200.37 69.3981C200.23 69.1382 200.023 68.9206 199.77 68.7681C199.501 68.606 199.201 68.5005 198.89 68.4581C198.536 68.4082 198.178 68.3848 197.82 68.3881C197.113 68.3487 196.411 68.5381 195.82 68.9281C195.557 69.1537 195.346 69.4327 195.199 69.7466C195.052 70.0604 194.974 70.4018 194.97 70.7481H190.68C190.695 69.846 190.954 68.9648 191.43 68.1981V68.1981ZM199.92 74.2581C199.632 74.3537 199.338 74.4306 199.04 74.4881C198.73 74.5481 198.4 74.5981 198.04 74.6381C197.68 74.6781 197.35 74.7281 197.04 74.7881C196.719 74.848 196.401 74.9282 196.09 75.0281C195.796 75.1177 195.518 75.2563 195.27 75.4381C195.039 75.6117 194.847 75.8335 194.71 76.0881C194.56 76.3993 194.487 76.7426 194.5 77.0881C194.482 77.434 194.555 77.7786 194.71 78.0881C194.842 78.3414 195.039 78.5553 195.28 78.7081C195.544 78.8606 195.831 78.9687 196.13 79.0281C196.46 79.0887 196.795 79.1188 197.13 79.1181C197.823 79.1582 198.514 79.0096 199.13 78.6881C199.54 78.4414 199.883 78.0981 200.13 77.6881C200.342 77.3186 200.478 76.9106 200.53 76.4881C200.582 76.1573 200.609 75.823 200.61 75.4881V73.8781C200.408 74.0506 200.174 74.1799 199.92 74.2581V74.2581Z" fill="white"/>
                            <path d="M212.64 59.9381V81.5381H208.34V59.9381H212.64Z" fill="white"/>
                            <path d="M224.56 63.4781V59.9381H228.85V63.4781H224.56ZM228.85 65.8981V81.5381H224.56V65.8981H228.85Z" fill="white"/>
                            <path d="M243.35 79.5381C242.892 80.3429 242.192 80.9832 241.35 81.3681C240.42 81.7568 239.42 81.947 238.412 81.9263C237.405 81.9057 236.413 81.6746 235.5 81.2481C234.631 80.8129 233.878 80.1791 233.3 79.3981C232.71 78.5935 232.269 77.689 232 76.7281C231.706 75.7039 231.558 74.6435 231.56 73.5781C231.563 72.5622 231.711 71.5519 232 70.5781C232.272 69.6428 232.713 68.7651 233.3 67.9881C233.886 67.2433 234.622 66.6301 235.46 66.1881C236.391 65.725 237.42 65.4918 238.46 65.5081C239.373 65.506 240.275 65.7076 241.1 66.0981C241.923 66.4697 242.618 67.0748 243.1 67.8381H243.16V59.9381H247.45V81.5381H243.37V79.5381H243.35ZM243.17 71.8081C243.063 71.2508 242.852 70.7184 242.55 70.2381C242.261 69.7845 241.871 69.4045 241.41 69.1281C240.876 68.8301 240.271 68.6848 239.66 68.7081C239.037 68.6865 238.419 68.8315 237.87 69.1281C237.401 69.4048 237.003 69.7886 236.71 70.2481C236.404 70.7361 236.188 71.2744 236.07 71.8381C235.94 72.4495 235.877 73.0731 235.88 73.6981C235.876 74.311 235.946 74.9222 236.09 75.5181C236.217 76.0948 236.447 76.6437 236.77 77.1381C237.077 77.6007 237.48 77.9927 237.95 78.2881C238.468 78.5892 239.061 78.7383 239.66 78.7181C240.277 78.7385 240.888 78.5935 241.43 78.2981C241.898 78.0213 242.287 77.6287 242.56 77.1581C242.853 76.66 243.06 76.1155 243.17 75.5481C243.291 74.9288 243.351 74.2991 243.35 73.6681C243.352 73.0436 243.292 72.4205 243.17 71.8081V71.8081Z" fill="white"/>
                            <path d="M255.33 77.7881C256.037 78.335 256.894 78.6545 257.787 78.7045C258.679 78.7545 259.566 78.5326 260.33 78.0681C260.855 77.7517 261.259 77.2697 261.48 76.6981H265.26C264.824 78.3154 263.837 79.7299 262.47 80.6981C261.112 81.5375 259.536 81.9584 257.94 81.9081C256.803 81.9236 255.673 81.7234 254.61 81.3181C253.659 80.9518 252.801 80.3779 252.1 79.6381C251.4 78.8873 250.86 78.003 250.51 77.0381C250.128 75.9698 249.939 74.8424 249.95 73.7081C249.939 72.5915 250.135 71.4827 250.53 70.4381C250.888 69.4653 251.443 68.5768 252.16 67.8281C252.884 67.0874 253.752 66.5021 254.71 66.1081C255.737 65.6703 256.844 65.4523 257.96 65.4681C259.166 65.4397 260.361 65.7075 261.44 66.2481C262.403 66.7352 263.236 67.4448 263.87 68.3181C264.526 69.2157 264.995 70.2358 265.25 71.3181C265.532 72.4551 265.634 73.6295 265.55 74.7981H254.27C254.233 75.8928 254.612 76.9609 255.33 77.7881V77.7881ZM260.18 69.5581C259.874 69.2571 259.506 69.0255 259.102 68.8789C258.699 68.7322 258.268 68.674 257.84 68.7081C257.25 68.6882 256.664 68.8082 256.13 69.0581C255.709 69.2637 255.338 69.5569 255.04 69.9181C254.777 70.2381 254.583 70.6093 254.47 71.0081C254.365 71.3326 254.298 71.6681 254.27 72.0081H261.27C261.137 71.1074 260.76 70.2603 260.18 69.5581Z" fill="white"/>
                            <path d="M272.18 65.8981V68.1081H272.27C272.76 67.2471 273.494 66.551 274.38 66.1081C275.213 65.7051 276.125 65.4933 277.05 65.4881C278.015 65.4576 278.977 65.6173 279.88 65.9581C280.562 66.235 281.161 66.6827 281.62 67.2581C282.058 67.8523 282.362 68.5348 282.51 69.2581C282.685 70.1303 282.769 71.0184 282.76 71.9081V81.5281H278.47V72.6881C278.537 71.6913 278.329 70.6953 277.87 69.8081C277.632 69.4658 277.308 69.1927 276.93 69.017C276.553 68.8413 276.135 68.7692 275.72 68.8081C275.248 68.762 274.771 68.8286 274.33 69.0024C273.888 69.1763 273.494 69.4524 273.18 69.8081C272.566 70.8448 272.29 72.0472 272.39 73.2481V81.4481H268.09V65.8981H272.18Z" fill="white"/>
                            <path d="M294.62 65.8981V68.7681H291.48V76.5181C291.403 76.7696 291.396 77.0373 291.46 77.2924C291.524 77.5475 291.656 77.7805 291.842 77.9665C292.028 78.1524 292.261 78.2843 292.516 78.348C292.771 78.4117 293.038 78.4048 293.29 78.3281C293.53 78.3281 293.77 78.3281 293.99 78.3281C294.201 78.3092 294.412 78.2792 294.62 78.2381V81.5681C294.219 81.6323 293.815 81.6724 293.41 81.6881H292.11C291.477 81.6885 290.846 81.6417 290.22 81.5481C289.667 81.4751 289.134 81.2951 288.65 81.0181C288.193 80.7526 287.819 80.3647 287.57 79.8981C287.286 79.3063 287.152 78.6538 287.18 77.9981V68.7681H284.58V65.8981H287.18V61.2081H291.48V65.8981H294.62Z" fill="white"/>
                            <path d="M296.8 63.4781V59.9381H301.1V63.4781H296.8ZM301.1 65.8981V81.5381H296.8V65.8981H301.1Z" fill="white"/>
                            <path d="M313.08 65.8981V68.7681H309.93V76.5181C309.853 76.7696 309.846 77.0373 309.91 77.2924C309.974 77.5475 310.106 77.7805 310.292 77.9665C310.478 78.1524 310.711 78.2843 310.966 78.348C311.221 78.4117 311.488 78.4048 311.74 78.3281C311.99 78.3281 312.22 78.3281 312.44 78.3281C312.66 78.3281 312.87 78.3281 313.08 78.2381V81.5681C312.679 81.6313 312.275 81.6714 311.87 81.6881H310.56C309.927 81.6885 309.296 81.6417 308.67 81.5481C308.118 81.4736 307.585 81.2937 307.1 81.0181C306.643 80.755 306.272 80.3662 306.03 79.8981C305.742 79.3078 305.608 78.6542 305.64 77.9981V68.7681H303V65.8981H305.61V61.2081H309.9V65.8981H313.08Z" fill="white"/>
                            <path d="M321.52 86.1981C320.471 86.7931 319.274 87.0743 318.07 87.0081C317.62 87.0081 317.18 87.0081 316.75 87.0081L315.44 86.8981V83.3581L316.68 83.4781C317.103 83.5082 317.527 83.5082 317.95 83.4781C318.194 83.4662 318.432 83.4009 318.648 83.2868C318.864 83.1728 319.053 83.0128 319.2 82.8181C319.47 82.4499 319.614 82.0045 319.61 81.5481C319.617 81.2061 319.556 80.8662 319.43 80.5481L314 65.8981H318.57L322.11 76.6081H322.17L325.59 65.8981H330L323.46 83.4681C323.122 84.5623 322.442 85.5191 321.52 86.1981V86.1981Z" fill="white"/>
                            <path d="M22.7 77.8881C25.97 94.1781 43.53 104.528 62.14 102.178C72.1277 101.107 81.5489 97.0065 89.14 90.4281V49.1781H79.81V56.3181H70.47V49.1781H33.47C23.8 55.2381 20.32 66.0181 22.7 77.8881ZM0 49.1781H33.43C37.5121 46.7148 42.068 45.1405 46.8 44.5581C55.96 43.2681 78.45 44.8481 104.5 30.0081C105.16 29.6281 108.02 28.0081 109.69 28.7481C110.97 29.1681 111.17 31.2481 111.2 32.2081C111.29 44.8681 108.04 73.8381 89.12 90.4281V138.298H0V49.1781ZM70.45 88.3881V59.8881H79.79V88.3881H70.45ZM67.16 59.8881L57.61 88.3881H46.84L37.34 59.8881H47.06L52.39 78.7281L57.66 59.8881H67.16ZM129.16 7.88808C128.53 13.8881 125.68 17.6881 121.16 21.1781C119.22 22.6881 115.47 25.0681 112.95 23.6581C109.79 21.9581 110.74 15.8781 111.14 12.6581C111.86 6.79808 114.84 1.24808 119.97 0.208078C124.6 -0.731922 129.83 1.45808 129.15 7.89808L129.16 7.88808Z" fill="white"/>
                            <path d="M129.35 30.1581V33.1581H127.46V30.1581H129.35ZM129.35 36.0981V51.5781H127.46V36.1081L129.35 36.0981Z" fill="white"/>
                            <path d="M134.84 36.1081V38.7781H134.9C135.267 37.8274 135.943 37.0278 136.82 36.5081C137.72 35.9485 138.76 35.6539 139.82 35.6581C140.745 35.6327 141.666 35.775 142.54 36.0781C143.213 36.3188 143.815 36.7245 144.29 37.2581C144.746 37.8015 145.065 38.4461 145.22 39.1381C145.409 39.9544 145.499 40.7903 145.49 41.6281V51.6281H143.6V41.9181C143.604 41.2968 143.544 40.6769 143.42 40.0681C143.316 39.5362 143.101 39.032 142.79 38.5881C142.483 38.1533 142.065 37.8081 141.58 37.5881C140.977 37.3301 140.325 37.2072 139.67 37.2281C138.982 37.2163 138.3 37.3527 137.67 37.6281C137.096 37.886 136.584 38.2646 136.17 38.7381C135.732 39.2286 135.392 39.799 135.17 40.4181C134.933 41.1004 134.805 41.8158 134.79 42.5381V51.5381H133V36.1081H134.84Z" fill="white"/>
                            <path d="M151 30.1581V33.1581H149.11V30.1581H151ZM151 36.1081V51.5781H149.11V36.1081H151Z" fill="white"/>
                            <path d="M160.79 36.1081V37.6981H157.64V48.1081C157.618 48.6047 157.707 49.0999 157.9 49.5581C158.07 49.9081 158.49 50.1081 159.17 50.1481C159.711 50.148 160.252 50.118 160.79 50.0581V51.6481C160.51 51.6481 160.23 51.6481 159.95 51.6481C159.67 51.6481 159.39 51.6481 159.11 51.6481C158.168 51.7445 157.225 51.48 156.47 50.9081C155.883 50.1347 155.624 49.161 155.75 48.1981V37.6881H153.05V36.1081H155.75V31.4481H157.64V36.1081H160.79Z" fill="white"/>
                            <path d="M165.44 30.1581V33.1581H163.55V30.1581H165.44ZM165.44 36.0981V51.5781H163.55V36.1081L165.44 36.0981Z" fill="white"/>
                            <path d="M169.46 38.4981C169.762 37.862 170.211 37.3068 170.77 36.8781C171.346 36.4446 172.002 36.1286 172.7 35.9481C173.503 35.7402 174.33 35.6393 175.16 35.6481C175.831 35.6493 176.501 35.7129 177.16 35.8381C177.814 35.9591 178.436 36.2108 178.99 36.5781C179.568 36.9615 180.037 37.4887 180.35 38.1081C180.72 38.9019 180.895 39.7729 180.86 40.6481V48.8681C180.84 49.0217 180.855 49.178 180.906 49.3245C180.956 49.4711 181.04 49.6039 181.151 49.7125C181.261 49.8211 181.395 49.9026 181.543 49.9504C181.69 49.9982 181.847 50.0111 182 49.9881C182.206 49.9909 182.411 49.95 182.6 49.8681V51.4581L182.02 51.5481C181.803 51.5603 181.586 51.5603 181.37 51.5481C180.977 51.5621 180.585 51.4939 180.22 51.3481C179.945 51.2338 179.709 51.0429 179.54 50.7981C179.375 50.5377 179.269 50.244 179.23 49.9381C179.176 49.5773 179.149 49.2129 179.15 48.8481H179.09C178.786 49.3131 178.452 49.7574 178.09 50.1781C177.752 50.5679 177.358 50.905 176.92 51.1781C176.462 51.4494 175.967 51.6516 175.45 51.7781C174.795 51.931 174.123 52.0015 173.45 51.9881C172.775 51.9894 172.102 51.9019 171.45 51.7281C170.851 51.5731 170.289 51.2975 169.8 50.9181C169.325 50.5415 168.944 50.0586 168.69 49.5081C168.407 48.8798 168.267 48.1968 168.28 47.5081C168.226 46.6043 168.479 45.7089 169 44.9681C169.503 44.3443 170.162 43.8648 170.91 43.5781C171.768 43.239 172.665 43.0105 173.58 42.8981L176.58 42.5281C176.98 42.4881 177.33 42.4381 177.63 42.3781C177.901 42.3292 178.157 42.2198 178.38 42.0581C178.589 41.9008 178.751 41.6901 178.85 41.4481C178.967 41.1281 179.021 40.7886 179.01 40.4481C179.032 39.9044 178.926 39.3632 178.7 38.8681C178.506 38.462 178.205 38.1163 177.83 37.8681C177.437 37.6175 176.999 37.4475 176.54 37.3681C176.018 37.2772 175.49 37.2337 174.96 37.2381C173.904 37.1922 172.863 37.4982 172 38.1081C171.601 38.4421 171.284 38.8644 171.076 39.3417C170.868 39.8189 170.773 40.3381 170.8 40.8581H168.91C168.939 40.0432 169.125 39.2417 169.46 38.4981V38.4981ZM178.91 43.1081C178.833 43.2301 178.732 43.3355 178.614 43.418C178.495 43.5004 178.361 43.5583 178.22 43.5881C177.925 43.6778 177.624 43.748 177.32 43.7981C176.52 43.9381 175.7 44.0581 174.85 44.1681C174.06 44.2663 173.281 44.4337 172.52 44.6681C171.885 44.8515 171.297 45.1724 170.8 45.6081C170.567 45.8355 170.386 46.1104 170.268 46.4141C170.151 46.7178 170.1 47.0431 170.12 47.3681C170.113 47.8086 170.212 48.2443 170.41 48.6381C170.592 49.0201 170.851 49.3605 171.17 49.6381C171.497 49.9137 171.874 50.1242 172.28 50.2581C172.696 50.3975 173.131 50.4684 173.57 50.4681C174.273 50.4708 174.972 50.3593 175.64 50.1381C176.277 49.9216 176.865 49.5818 177.37 49.1381C177.886 48.6999 178.297 48.152 178.574 47.5343C178.851 46.9166 178.986 46.2448 178.97 45.5681V43.1081H178.91Z" fill="white"/>
                            <path d="M190.79 36.1081V37.6981H187.64V48.1081C187.618 48.6047 187.707 49.0999 187.9 49.5581C188.07 49.9081 188.49 50.1081 189.17 50.1481C189.711 50.148 190.252 50.118 190.79 50.0581V51.6481C190.51 51.6481 190.23 51.6481 189.95 51.6481C189.67 51.6481 189.39 51.6481 189.11 51.6481C188.168 51.7445 187.225 51.48 186.47 50.9081C185.883 50.1347 185.624 49.161 185.75 48.1981V37.6881H183.05V36.1081H185.75V31.4481H187.64V36.1081H190.79Z" fill="white"/>
                            <path d="M194.92 46.4581C195.094 47.1764 195.403 47.8551 195.83 48.4581C196.255 49.0426 196.796 49.5329 197.42 49.8981C198.124 50.2942 198.923 50.4913 199.73 50.4681C200.923 50.5368 202.096 50.1387 203 49.3581C203.813 48.5798 204.377 47.5774 204.62 46.4781H206.51C206.223 48.0353 205.454 49.4628 204.31 50.5581C203.027 51.5897 201.403 52.1034 199.76 51.9981C198.671 52.0239 197.59 51.8016 196.6 51.3481C195.74 50.9442 194.992 50.3366 194.42 49.5781C193.845 48.7942 193.425 47.9086 193.18 46.9681C192.904 45.9477 192.766 44.895 192.77 43.8381C192.771 42.8242 192.909 41.815 193.18 40.8381C193.431 39.8936 193.851 39.0024 194.42 38.2081C194.993 37.4281 195.739 36.7915 196.6 36.3481C197.58 35.8588 198.665 35.6184 199.76 35.6481C200.806 35.6091 201.844 35.8375 202.777 36.3117C203.709 36.7859 204.505 37.4903 205.09 38.3581C205.639 39.1961 206.029 40.1284 206.24 41.1081C206.48 42.157 206.581 43.2329 206.54 44.3081H194.63C194.633 45.0343 194.73 45.757 194.92 46.4581ZM204.28 40.6881C204.054 40.0464 203.716 39.4504 203.28 38.9281C202.86 38.4177 202.339 37.999 201.75 37.6981C201.129 37.3885 200.444 37.2309 199.75 37.2381C199.033 37.222 198.323 37.3798 197.68 37.6981C197.091 37.999 196.57 38.4177 196.15 38.9281C195.72 39.4582 195.382 40.0565 195.15 40.6981C194.9 41.3619 194.732 42.0537 194.65 42.7581H204.65C204.634 42.0531 204.51 41.3548 204.28 40.6881V40.6881Z" fill="white"/>
                            <path d="M221 51.5781V48.6381H220.94C220.735 49.1487 220.436 49.6167 220.06 50.0181C219.662 50.4492 219.2 50.8168 218.69 51.1081C218.188 51.4015 217.65 51.63 217.09 51.7881C216.537 51.9454 215.965 52.0262 215.39 52.0281C214.33 52.0523 213.279 51.8297 212.32 51.3781C211.467 50.9632 210.721 50.3575 210.14 49.6081C209.546 48.8293 209.108 47.9431 208.85 46.9981C208.29 44.9456 208.29 42.7806 208.85 40.7281C209.107 39.7796 209.545 38.8898 210.14 38.1081C210.723 37.3582 211.469 36.7497 212.32 36.3281C213.277 35.8684 214.329 35.6422 215.39 35.6681C215.963 35.667 216.534 35.7375 217.09 35.8781C217.632 36.0139 218.151 36.2296 218.63 36.5181C219.109 36.8073 219.54 37.1682 219.91 37.5881C220.285 38.0191 220.573 38.5182 220.76 39.0581H220.82V30.1581H222.71V51.5781H221ZM210.64 46.2181C210.814 46.9719 211.118 47.6894 211.54 48.3381C211.941 48.9546 212.478 49.4711 213.11 49.8481C213.81 50.2555 214.61 50.4599 215.42 50.4381C216.303 50.4648 217.179 50.2615 217.96 49.8481C218.628 49.4795 219.203 48.963 219.64 48.3381C220.079 47.6955 220.395 46.9765 220.57 46.2181C220.943 44.65 220.943 43.0162 220.57 41.4481C220.395 40.6928 220.079 39.9771 219.64 39.3381C219.204 38.7095 218.629 38.1895 217.96 37.8181C217.178 37.4081 216.303 37.2082 215.42 37.2381C214.611 37.2127 213.811 37.4136 213.11 37.8181C212.478 38.1987 211.941 38.7186 211.54 39.3381C211.119 39.9832 210.814 40.6974 210.64 41.4481C210.255 43.0148 210.255 44.6514 210.64 46.2181V46.2181Z" fill="white"/>
                            <path d="M236.54 30.1581V39.0381H236.6C236.786 38.4959 237.079 37.9962 237.46 37.5681C237.824 37.1461 238.252 36.7848 238.73 36.4981C239.215 36.2076 239.741 35.9919 240.29 35.8581C240.839 35.7194 241.404 35.6489 241.97 35.6481C243.031 35.621 244.084 35.8473 245.04 36.3081C245.893 36.7355 246.639 37.3509 247.22 38.1081C247.814 38.8868 248.252 39.7731 248.51 40.7181C249.07 42.7706 249.07 44.9356 248.51 46.9881C248.252 47.9331 247.814 48.8193 247.22 49.5981C246.625 50.3451 245.865 50.9441 245 51.3481C244.041 51.8008 242.99 52.0234 241.93 51.9981C240.76 52.006 239.61 51.6986 238.6 51.1081C237.623 50.5444 236.865 49.6668 236.45 48.6181H236.39V51.5581H234.65V30.1581H236.54ZM246.75 41.4481C246.576 40.6974 246.271 39.9832 245.85 39.3381C245.445 38.7219 244.909 38.2028 244.28 37.8181C243.579 37.4136 242.779 37.2127 241.97 37.2381C241.146 37.1975 240.325 37.3693 239.586 37.737C238.847 38.1047 238.215 38.656 237.75 39.3381C237.314 39.9777 237.002 40.6934 236.83 41.4481C236.445 43.0148 236.445 44.6514 236.83 46.2181C237.002 46.9759 237.314 47.6949 237.75 48.3381C238.219 49.016 238.852 49.5642 239.59 49.9314C240.328 50.2986 241.146 50.4729 241.97 50.4381C242.78 50.4599 243.58 50.2555 244.28 49.8481C244.91 49.4684 245.446 48.9524 245.85 48.3381C246.272 47.6894 246.576 46.9719 246.75 46.2181C247.135 44.6514 247.135 43.0148 246.75 41.4481V41.4481Z" fill="white"/>
                            <path d="M252.14 36.1081L257.24 49.3081L262 36.1081H263.89L257.17 53.9281C256.939 54.4848 256.679 55.0289 256.39 55.5581C256.183 55.9349 255.912 56.2732 255.59 56.5581C255.3 56.8085 254.959 56.9928 254.59 57.0981C254.107 57.2214 253.609 57.2786 253.11 57.2681H252.22C252.033 57.2636 251.847 57.2298 251.67 57.1681V55.5381L252.31 55.6381C252.526 55.6533 252.744 55.6533 252.96 55.6381C253.302 55.646 253.642 55.5848 253.96 55.4581C254.227 55.3395 254.468 55.1697 254.67 54.9581C254.88 54.7343 255.053 54.4776 255.18 54.1981L255.63 53.1981L256.29 51.4581L250.13 36.1081H252.14Z" fill="white"/>
                        </svg>
                    </a>
                    <ul class="mf__links">
                        <li><a href="http://ubx.info/konferenz/datenschutz/" target="_blank">Data protection</a></li>
                        <li><a href="http://ubx.info/konferenz/impressum/" target="_blank">Impressum</a></li>
                    </ul>
                </div>
                <div class="mf__social-media-container">
                    <span>Follow us on</span>
                    <ul>
                        <li>
                            <a href="https://twitter.com/virtualidentity" target="_blank" rel="noreferrer" aria-label="link to Twitter">
                            <svg height="24" viewBox="0 0 250 204">
                                <path d="M78.5 203.2C172.8 203.2 224.4 125 224.4 57.3C224.4 55.1 224.4 52.9 224.3 50.7C234.3 43.5 243 34.4 249.9 24.1C240.7 28.2 230.8 30.9 220.4 32.2C231 25.9 239.1 15.8 243 3.8C233.1 9.7 222.1 13.9 210.4 16.2C201 6.2 187.7 0 173 0C144.7 0 121.7 23 121.7 51.3C121.7 55.3 122.2 59.2 123 63C80.4 60.9 42.6 40.4 17.3 9.4C12.9 17 10.4 25.8 10.4 35.2C10.4 53 19.5 68.7 33.2 77.9C24.8 77.6 16.9 75.3 10 71.5C10 71.7 10 71.9 10 72.2C10 97 27.7 117.8 51.1 122.5C46.8 123.7 42.3 124.3 37.6 124.3C34.3 124.3 31.1 124 28 123.4C34.5 143.8 53.5 158.6 75.9 159C58.3 172.8 36.2 181 12.2 181C8.1 181 4 180.8 0 180.3C22.6 194.7 49.6 203.2 78.5 203.2Z" fill="white"/>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/user/virtualidentityag" rel="noreferrer" target="_blank" aria-label="link to YouTube">
                            <svg height="24" viewBox="0 0 176 124">
                                <path d="M172.3 19.4C171.309 15.6426 169.346 12.2128 166.607 9.45644C163.868 6.70005 160.451 4.7145 156.7 3.7C143 7.15256e-07 88 0 88 0C88 0 33 7.15256e-07 19.2 3.7C15.4675 4.72978 12.071 6.72211 9.35075 9.47749C6.63047 12.2329 4.68184 15.6546 3.7 19.4C-2.38419e-07 33.2 0 62 0 62C0 62 -2.38419e-07 90.8 3.7 104.6C4.69051 108.357 6.65418 111.787 9.39302 114.544C12.1319 117.3 15.549 119.286 19.3 120.3C33 124 88 124 88 124C88 124 143 124 156.8 120.3C160.551 119.286 163.968 117.3 166.707 114.544C169.446 111.787 171.409 108.357 172.4 104.6C176 90.8 176 62 176 62C176 62 176 33.2 172.3 19.4ZM70 88.2V35.8L116 62L70 88.2Z" fill="white"/>
                            </svg>
                            </a>
                        </li>
                        <li>
                            <a href="https://de-de.facebook.com/virtualidentityag/" rel="noreferrer" target="_blank" aria-label="link to Facebook">
                            <svg height="24" viewBox="0 0 1024 1018">
                                <path d="M1024 512C1024 229.2 794.8 0 512 0C229.2 0 0 229.2 0 512C0 767.6 187.2 979.4 432 1017.8V660H302V512H432V399.2C432 270.9 508.4 200 625.4 200C681.4 200 740 210 740 210V336H675.4C611.8 336 592 375.5 592 416V512H734L711.3 660H592V1017.8C836.8 979.4 1024 767.6 1024 512Z" fill="white"/>
                            </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    `;
}