import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

import headerBGImage from './images/large-triangles.svg';

(function loadHeaderBackground() {
  const pageHeader = document.querySelector('body > header');

  pageHeader.style.backgroundImage = `url("${headerBGImage}")`;
}());
