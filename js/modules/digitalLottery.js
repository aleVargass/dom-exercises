const d = document,
m = Math;
export default function digitalLottery(getWinner, contestants) {
  const $getWinner = d.querySelector(getWinner),
  $players = d.querySelector(contestants).children;

  d.addEventListener('click', e => {
    if (e.target === $getWinner) {
      let winner = m.floor(m.random() * $players.length);
      alert(`The winner is ${$players[winner].textContent}`)
      }
  })
}

const getWinnerComment = (selector) =>{
  const $players = document.querySelectorAll(selector),
  random = m.floor(m.random() * $players.length),
  winner = $players[random];
  
  console.log(winner.textContent)
}

//getWinnerComment(tags que se quieran utlizar como selector)