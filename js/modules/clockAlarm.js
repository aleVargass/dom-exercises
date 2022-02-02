export function clock(clock, btnStart, btnStop) { 
  document.querySelector(clock).textContent = '00:00:00';
  let hourActive;
    document.addEventListener('click', e => {
      if (e.target.matches(btnStart)) {
        hourActive = setInterval(() => {
          let hour = new Date().toLocaleTimeString();
          document.querySelector(clock).textContent = hour;
        }, 1000);
        
        e.target.disabled = true;
        document.querySelector(btnStart).classList.add('active');
      };

      if (e.target.matches(btnStop)) {
        clearInterval(hourActive);
        document.querySelector(clock).textContent = '00:00:00';
      
        document.querySelector(btnStart).disabled = false;
        document.querySelector(btnStart).classList.remove('active');
        }
    });
};

export function alarm(btnPlay, btnStop) {
    const audio = new Audio('https://www.myinstants.com/media/sounds/tuturu_1.mp3');
    document.addEventListener('click', e => {
        if (e.target.matches(btnPlay)) {
            audio.loop = true;
            audio.play();
            document.querySelector(btnPlay).classList.add('active');

            e.target.disabled = true;
        };

        if (e.target.matches(btnStop)) {
            audio.pause();
            audio.currentTime = 0;
            document.querySelector(btnPlay).classList.remove('active');

            document.querySelector(btnPlay).disabled = false;
        };
    });
};
