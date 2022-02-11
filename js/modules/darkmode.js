export default function darkmode(icon) {
  const $icon = document.querySelector(icon),
  $selectors = document.querySelectorAll('[data-dark]');
  const light = () => {
    $icon.classList.remove('active');
    $icon.setAttribute('class', 'darkmodeIcon fas fa-moon');
    $selectors.forEach(el => el.classList.remove("dark"));
    localStorage.setItem('theme', 'light');
  }
  
  const dark = () => {
    $icon.setAttribute('class', 'darkmodeIcon fas fa-sun');
    $icon.classList.add('active');
    $selectors.forEach(el =>  el.classList.add("dark"));
    localStorage.setItem('theme', 'dark');
  }
  
  if (localStorage.getItem('theme') === 'dark') {
    dark();
  }

  document.addEventListener('click', e => {
    if (e.target.matches(icon)) {
      if ($icon.classList.contains('active')) {
       light(); 
      } else {
        dark();
      }
    };
  });
  
};