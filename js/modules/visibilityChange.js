const d = document;
const c = console;
export default function visibilityChange() {
  const $videos = d.querySelectorAll('video[data-scrollVisibilityChange]');

  const callback = function(entries)  {
    entries.forEach(entry => {
      entry.isIntersecting ? entry.target.play() : entry.target.pause();
      
      d.addEventListener('visibilitychange', e => {
        if (d.hidden) {
          entry.target.pause()
        } else {
           entry.isIntersecting ? entry.target.play() : entry.target.pause();
          };
      });

    });
  };

  const observer = new IntersectionObserver(callback, {threshold: [.5, .75]});
  $videos.forEach(video => observer.observe(video));
};