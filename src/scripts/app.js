// Import style sheet
import '../css/main.css';

import { runAlert } from './modules/mod1';
import greeting from './modules/mod2';

(function() {

    runAlert();
    console.log(greeting('Alan'));
})();
