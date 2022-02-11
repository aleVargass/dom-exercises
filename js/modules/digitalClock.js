export default function clock(clockStamp, clockBtn) { 
  const $clockStamp = document.getElementById(clockStamp),
  $clockBtn = document.getElementById(clockBtn),
  audio = new Audio("https://www.soundjay.com/clock/sounds/clock-ticking-2.mp3");
  audio.loop = true;
  let currentTime;


  document.addEventListener('click', e => {
    if (e.target === $clockBtn && currentTime) {
        console.log(currentTime);
        clearInterval(currentTime);
        currentTime = 0;
        $clockBtn.classList.remove('active');
        $clockBtn.textContent = "Start clock";
        audio.pause();
        audio.currentTime = 0;

      } else if (e.target === $clockBtn){
        console.log(currentTime);
        currentTime = setInterval(() => {
          let hour = new Date().toLocaleTimeString();
          $clockStamp.textContent = hour;
        }, 1000);
        
        $clockBtn.classList.add('active');
        $clockBtn.textContent = "Stop clock";
        audio.play()
      };
  });

};