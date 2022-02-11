export function shortcuts(e) {
  if (e.key === 'a' && e.altKey) {
    alert('The dot moves with requestAnimationFrame API')
  };
};



export function moveElement() {
  let up = false,
  right = false,
  down = false,
  left = false,
  x = 100,
  y = 100;

  window.addEventListener('keydown',press);
  function press(e){
    switch(e.keyCode) {
      case 87:
        up = true
        break;
      case 68:
        right = true
        break;
      case 83:
        down = true
        break;
      case 65:
        left = true
        break;
    }
  }

  window.addEventListener('keyup',release);
  function release(e){
    switch(e.keyCode) {
      case 87:
        up = false
        break;
      case 68:
        right = false
        break;
      case 83:
        down = false
        break;
      case 65:
        left = false
        break;
    }
  }

  window.addEventListener("resize", e => {
    x = 100;
    y = 100;
  })

  function gameLoop(){
    let box = document.getElementById("box")
    let element = document.getElementById('dot');

    if (up && y > 0){
      y -= 10
    }
    if (right && x < box.clientWidth-30){
      x += 10
    }
    if (down && y < box.clientHeight-30){
      y += 10
    }
    if (left && x > 0){
      x -= 10
    }

    element.style.left = x+'px'
    element.style.top = y+'px'

    window.requestAnimationFrame(gameLoop);
  }
  window.requestAnimationFrame(gameLoop);
}