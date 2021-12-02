/**
 * Adiciones que quiero
 * movimiento diagonal al dot
 * if focus en la blackBox e.preventDefault() de las arrows
 * No se exportan por default ya que son dos.
 */
export function shortcuts(e) {
  if (e.key === 'a' && e.altKey) {
    alert('Mandaste un alert con el teclado.')
  };
};

export  function move(e, box, dot) {
  let x = 0;
  let y = 0;
  const $dot = document.querySelector(dot),
  $box = document.querySelector(box),
  limitDot = $dot.getBoundingClientRect(),
  limitBox = $box.getBoundingClientRect();

switch (e.keyCode) {
  case 37:
    if (limitDot.left > limitBox.left + 32) x--;
    e.preventDefault();
    break;
  case 38:
    if (limitDot.top > limitBox.top + 32)  {
      e.preventDefault();
      y--; 
    }
    break;
  case 39:
    e.preventDefault();
    if (limitDot.right < limitBox.right - 32) x++;
    break;
  case 40:
    if (limitDot.bottom < limitBox.bottom - 32)  {
      e.preventDefault();
      y++;
    }
    break;
  default:
    break;
}
$dot.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}