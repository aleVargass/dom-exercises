export default function visibilityChange() {
  const $video = document.getElementById("videoVisibilityChange");

  const callback = function(entries)  {
    entries.forEach(entry => {
      entry.isIntersecting ? entry.target.play() : entry.target.pause();
      
      document.addEventListener('visibilitychange', e => {
        if (document.hidden) {
          entry.target.pause()
        } else {
           entry.isIntersecting ? entry.target.play() : entry.target.pause();
          };
      });

    });
  };

  const observer = new IntersectionObserver(callback, {threshold: [.5, .75]});
  observer.observe($video);
};