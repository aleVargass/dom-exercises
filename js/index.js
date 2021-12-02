import hamburgerMenu from "./modules/hamburgerMenu.js";
import {clock, alarm} from "./modules/clockAlarm.js";
import { shortcuts, move } from "./modules/keyboardEvent.js";
import countdown from "./modules/countdown.js";
import scrollTopBtn from "./modules/scrollTopBtn..js";
import darkmode from "./modules/darkmode.js";
import responsive from "./modules/responsiveJS.js";
import responsiveTester from "./modules/responsiveTester.js";
import devicesDetection from "./modules/devicesDetection.js";
import connectionDetection from "./modules/connectionDetection.js";
import geolocation from "./modules/geolocation.js";
import searchFilter from "./modules/searchFilter.js";
import digitalLottery from "./modules/digitalLottery.js";
import responsiveSlider from "./modules/responsiveSlider.js";
import scrollSpy from "./modules/scrollSpy.js";
import visibilityChange from "./modules/visibilityChange.js";
import contactForm from "./modules/contactForm.js";
import narrator from "./modules/narrator.js";

connectionDetection('.connectionMsg');
darkmode('.darkmodeBtn', '.darkmodeIcon', 'dark');

document.addEventListener('DOMContentLoaded', e => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a'); 
  clock('#clock', '#startClock', '#stopClock');
  alarm('#startAlarm', '#stopAlarm');
  countdown('countdown',
  'Jan 01, 2022 00:00:00',
  'Happy new year!')
  scrollTopBtn('.scrollTopBtn')
  responsive('video','(max-width: 700px)',
  `<a href='https://youtu.be/eq8r1ZTma08' target='_blank' rel='noopener'>Ver video</a>`,
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/eq8r1ZTma08" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
  responsive('map', '(max-width: 700px)',
  `<a href='https://goo.gl/maps/YRGs4pSyTQ9WExEaA' target='_blank' rel='noopener'>Ver mapa</a>`,
  '<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d60712.72299233406!2d-94.5575128!3d17.999885!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1620765395141!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');
  responsiveTester('responsivetesterForm');
  devicesDetection('userAgent');
  geolocation('position');
  searchFilter('searchFilter', '.card');
  digitalLottery('.getWinner', '.contestants');
  responsiveSlider('slider', '.imgsSlider', '.arrow.left', '.arrow.right')
  scrollSpy();
  visibilityChange();
  contactForm();
  narrator();
});

  document.addEventListener('keydown', e => {
    shortcuts(e);
    move(e, '#blackBox', '#yellowDot');
  })