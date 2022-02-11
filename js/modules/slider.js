export default function responsiveSlider(wrap, items, arrowLeft, arrowRight) {
  const $wrap = document.getElementById(wrap),
  $arrowLeft = document.getElementById(arrowLeft),
  $arrowRight = document.getElementById(arrowRight);

  
  const nextItem = () => {
    let $items = document.querySelectorAll(items);
    let $firstItem = $items[0];
    $wrap.style.transform = 'translateX(-200%)';
    $wrap.style.transition = 'transform 500ms'
    
    setTimeout(() => {
      $wrap.style.transition  = 'none';
      $wrap.insertAdjacentElement('beforeend', $firstItem);
      $wrap.style.transform = 'translate(-100%)';
    }, 500);
  };

  const prevItem = () => {
    let $items = document.querySelectorAll(items);
    let $lastItem = $items[$items.length - 1];
    $wrap.style.transform = 'translateX(0)';
    $wrap.style.transition = 'transform 500ms';

    setTimeout(() => {
      $wrap.style.transition = 'none'
      $wrap.insertAdjacentElement('afterbegin', $lastItem)
      $wrap.style.transform = 'translateX(-100%)'
    }, 500);
  }

  document.addEventListener('click', e => {
    if (e.target === $arrowRight) {
      nextItem();
    }
    if (e.target === $arrowLeft) {
      prevItem();
    }

  })
  // setInterval(() => {
  // next()
  // }, 4000);
}