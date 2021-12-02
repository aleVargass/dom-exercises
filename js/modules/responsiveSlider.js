const d =  document,
c = console;
export default function responsiveSlider(slider, imgsSlider, arrowLeft, arrowRight) {
  const $slider  = d.getElementById(slider),
   sliderRules = d.styleSheets[d.styleSheets.length - 1].cssRules[1].style;
  
  const next = () => {
    let $firstImg = d.querySelectorAll(imgsSlider)[0];
    sliderRules.marginLeft = '-200%';
    sliderRules.transition = 'all .5s'
    
    setTimeout(() => {
      sliderRules.transition  = 'none';
      $slider.insertAdjacentElement('beforeend', $firstImg);
      sliderRules.marginLeft = '-100%';
    }, 500);
  };

  const prev = () => {
    let $imgs = d.querySelectorAll(imgsSlider),
    $lastImg = $imgs[$imgs.length - 1];
    sliderRules.marginLeft = '0'
    sliderRules.transition = 'all .5s'

    setTimeout(() => {
      sliderRules.transition = 'none'
      $slider.insertAdjacentElement('afterbegin', $lastImg)
      sliderRules.marginLeft = '-100%'
    }, 500);
  }

  d.addEventListener('click', e => {
    if (e.target === arrowRight || e.target.matches(`${arrowRight} *`)) {
      next()
    }
    if (e.target === arrowLeft || e.target.matches(`${arrowLeft} *`)) {
      prev()
    }

  })

  setInterval(() => {
  next()
  }, 4000);
}