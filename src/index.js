import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/brands';

import headerBGImage from './images/large-triangles.svg';
import headerImg from './images/pexels-tranmautritam-225502.jpg';
import cloudImg1 from './images/pexels-cloud1.jpg';
import cloudImg2 from './images/pexels-cloud2.jpg';
import footerImg from './images/pexels-lisa-fotios-1957478.jpg';

(function loadHeaderBackground() {
  const pageHeader = document.querySelector('body > header');

  pageHeader.style.backgroundImage = `url("${headerBGImage}")`;
}());

(function loadPageImages() {
  const headerImage = document.querySelector('.headerImage');
  const footerImage = document.querySelector('footer img');

  headerImage.src = headerImg;
  footerImage.src = footerImg;

  const mainImages = document.querySelectorAll('main img');
  mainImages.forEach((el, idx) => {
    el.src = (idx % 2) ? cloudImg1 : cloudImg2;
  });
}());
