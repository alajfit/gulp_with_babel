/* global console, window */

// Import style sheet
import '../css/main.css';

// Third party libs
import $ from 'jquery';

import { runAlert } from './modules/mod1';
import greeting from './modules/mod2';

(function() {

    console.log(runAlert());
    console.log(greeting('Alan'));

    var para = $('<p/>').html('This is a paragraph. This is a paragraph. This is a paragraph. This is a paragraph.');
    $('body').append(para);
})();
