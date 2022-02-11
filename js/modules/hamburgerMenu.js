// Performance issue
// Save an HTMLelement in a var VS 
export default function hamburgerMenu(hamburgerBtn, mobileMenu, mobileItem) {
  const $hamburgerBtn = document.getElementById(hamburgerBtn),
  $mobileMenu = document.getElementById(mobileMenu);

  document.addEventListener("click", (e) => {
    if (e.target.matches("#hamburgerBtn") || e.target.matches(".spanHamburger") || e.target.matches(mobileItem)){
      $mobileMenu.classList.toggle("is-active");
      $hamburgerBtn.classList.toggle("is-active");
      document.body.classList.toggle("overflowYHidden");
    }
  });
}
