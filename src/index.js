import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';

import headerBGImage from './images/large-triangles.svg';
import headerMainImage from './images/pexels-tranmautritam-225502.jpg';

(function loadHeaderBackground() {
  const pageHeader = document.querySelector('body > header');

  pageHeader.style.backgroundImage = `url("${headerBGImage}")`;
}());

(function loadHeaderMainImage() {
  const headerImageContainer = document.querySelector('.header-image-container');
  const newImage = document.createElement('img');

  newImage.src = headerMainImage;
  newImage.classList.add('headerImage');
  headerImageContainer.appendChild(newImage);
}());

(function addH1ToHeaderImage() {
  const headerImageContainer = document.querySelector('.header-image-container');
  const newH1 = document.createElement('h1');

  newH1.textContent = 'Lorem Ipsum Dolor';
  newH1.classList.add('author-name');
  headerImageContainer.appendChild(newH1);
}());
