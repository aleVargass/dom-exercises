export default function contactForm() {
  const $contactForm = document.querySelector(".contactForm"),
  $inputs = document.querySelectorAll(".inputForm");

  $inputs.forEach(input => {
    const $span = document.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("msgError", "displayNone");
    input.insertAdjacentElement("afterend", $span);
  });

  document.addEventListener("keyup", e => {
    if (e.target.matches(".inputForm")) {
      let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value) 
        ? document.getElementById($input.name).classList.add("is-active")
        : document.getElementById($input.name).classList.remove("is-active");
      };

      if (!pattern) {
        return $input.value === ""
        ? document.getElementById($input.name).classList.add("is-active")
        : document.getElementById($input.name).classList.remove("is-active");
      };
    };
  });

};