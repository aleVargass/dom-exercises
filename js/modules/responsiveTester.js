/**
 * si el selector es por id getElementById() no se le tiene que indicar en el archivo  index.js con un hash #
 * no utilizar un input tag con type='submit' dentro de un form, crea una propagation
 * 
 */
export default function responsiveTester(form) {
  const $form = document.getElementById(form);
  let windo;

  document.addEventListener('submit', e => {
    if (e.target === $form) {
      e.preventDefault();
      windo = open($form.url.value,
        'windo',
        `innerWidth=${$form.width.value}, innerHeight=${$form.height.value}`);
    };
  });
  
  document.addEventListener('click', e => {
    if (e.target === $form.close && windo) windo.close();
  });
};