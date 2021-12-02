const d = document,
w = window,
c = console;
export default function scrollTopBtn(btn) {
  const $btn = d.querySelector(btn);

  const scrollToTop  = () => {
    if (pageYOffset > 980) {
      $btn.classList.remove('hidden');
    } else { 
      $btn.classList.add('hidden');
    }
  }
  scrollToTop()
  d.addEventListener('scroll', e => {
    scrollToTop()
  })

 d.addEventListener('click', e=> {
   if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
     w.scrollTo({
       behavior: 'smooth',
       top: 0,
     });
   }
 })
}