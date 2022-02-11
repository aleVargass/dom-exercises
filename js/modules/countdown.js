const d = document,
f = Math.floor;
export default function countdown(countdown, limitDate, message) {
  const $countdown = d.getElementById(countdown);

  let countdownTempo1s = setInterval(() => {    
    let countdown = new Date(limitDate) - new Date(),
    days = countdown / 86400000,
    hours = ('0' + f((countdown % 86400000) / 3600000)).slice(-2) ,
    mins = ('0' + f((countdown % 3600000) / 60000)).slice(-2) ,
    secs = ('0' + f((countdown % 60000) / 1000)).slice(-2)
    $countdown.textContent = `${f(days)} days ${hours} hours ${mins} mins ${secs} secs`;

    if (countdown < 0) {
      clearInterval(countdownTempo1s);
      $countdown.textContent = message;
    }
}, 1000);
}