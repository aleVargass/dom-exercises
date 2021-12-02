export default function hamburgerMenu(panelBtn, panel, menuLink) {
  const $btn = document.querySelector(panelBtn);
  const $asideMenu = document.querySelector(panel);
  const $body = document.querySelector(".body");

  document.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      $asideMenu.classList.toggle("is-active");
      $btn.classList.toggle("is-active");
    }

    if (e.target.matches(menuLink)) {
      $asideMenu.classList.remove("is-active");
      $btn.classList.remove("is-active");
    }
  });
}
