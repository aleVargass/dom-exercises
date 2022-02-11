export default function scrollSpy() {
  const $sections = document.querySelectorAll("section[data-scrollSpy]"),
  sectionsDesktop = document.querySelectorAll("section[data-scrollSpyDesktop]");

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
        document.querySelector(`a[data-scrollSpy][href="#${id}"]`).classList.add('active')
        document.querySelector(`a[data-scrollSpyDesktop][href="#${id}"]`).classList.add('active')
      } else {
        document.querySelector(`a[data-scrollSpy][href="#${id}"]`).classList.remove('active')
        document.querySelector(`a[data-scrollSpyDesktop][href="#${id}"]`).classList.remove('active')
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  $sections.forEach(section => {
    observer.observe(section);
  });

};