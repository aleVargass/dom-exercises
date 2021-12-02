const d = document;

export function clock(clock, btnStart, btnStop) { 
  d.querySelector(clock).textContent = '00:00:00';
  let hourActive;
    d.addEventListener('click', e => {
      if (e.target.matches(btnStart)) {
        hourActive = setInterval(() => {
          let hour = new Date().toLocaleTimeString();
          d.querySelector(clock).textContent = hour;
        }, 1000);
        
        e.target.disabled = true;
        d.querySelector(btnStart).classList.add('active');
      };

      if (e.target.matches(btnStop)) {
        clearInterval(hourActive);
        d.querySelector(clock).textContent = '00:00:00';
      
        d.querySelector(btnStart).disabled = false;
        d.querySelector(btnStart).classList.remove('active');
        }
    });
};

export function alarm(btnPlay, btnStop) {
    const audio = new Audio('https://www.myinstants.com/media/sounds/tuturu_1.mp3');
    d.addEventListener('click', e => {
        if (e.target.matches(btnPlay)) {
            audio.loop = true;
            audio.play();
            d.querySelector(btnPlay).classList.add('active');

            e.target.disabled = true;
        };

        if (e.target.matches(btnStop)) {
            audio.pause();
            audio.currentTime = 0;
            d.querySelector(btnPlay).classList.remove('active');

            d.querySelector(btnPlay).disabled = false;
        };
    });
};
