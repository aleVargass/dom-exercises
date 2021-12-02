const d = document;
export default function darkmode(btn, icon, classDark) {
  const $icon = d.querySelector(icon),
  //si se quiere aplicar estilos a un elemento viendo si tiene un atributo
  $selectors = d.querySelectorAll('[data-dark]');
  const light = () => {
    $icon.classList.remove('active');
    $icon.setAttribute('src', 'assets/moon.png');
    $selectors.forEach(el => el.classList.remove(classDark));
    localStorage.setItem('theme', 'light');
  }
  
  const dark = () => {
    $icon.classList.add('active');
    $icon.setAttribute('src', 'assets/sun.png');
    $selectors.forEach(el =>  el.classList.add(classDark));
    localStorage.setItem('theme', 'dark');
  }
  
  if (localStorage.getItem('theme') === 'dark') dark();

  d.addEventListener('click', e => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      if ($icon.classList.contains('active')) light();
      else dark();
    };
  });
};