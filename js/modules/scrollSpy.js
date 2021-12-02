const d = document,
c = console;

export default function  scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scrollSpy");

  const options = {
    root: null,
    rootMargin : '0px',
    threshold: [.5, .75]
  };

  const callback = function (entries, observer) {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.isIntersecting) {
        //que tenga el attrib data-scrollSpy y que valide []
        d.querySelector(`a[data-scrollSpy][href="#${id}"]`).classList.add('active')
      } else {
        d.querySelector(`a[data-scrollSpy][href="#${id}"]`).classList.remove('active')
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  $sections.forEach(section => {
    observer.observe(section);
  });

};