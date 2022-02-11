export default function scrollTopBtn(scrollTop) {
  const $btn = document.getElementById(scrollTop);

  const scrollToTop  = () => {
    if (window.scrollY > 980) {
      $btn.classList.remove('displayNone');
    } else { 
      $btn.classList.add('displayNone');
    }
  }

  scrollToTop()

  document.addEventListener('scroll', e => {
    scrollToTop()
  })

 document.addEventListener('click', e => {
   if (e.target === $btn) {
     window.scrollTo(0,0);
   }
 })
}