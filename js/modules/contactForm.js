const d = document,
c = console;
export default function contactForm() {
  const $contactForm = d.querySelector(".contactForm"),
  $inputs = d.querySelectorAll(".contactForm [required] ");

  $inputs.forEach(input => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("contactForm","msgError", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", e => {
    if (e.target.matches(".contactForm [required]")) {
      let $input = e.target,
      pattern = $input.pattern || $input.dataset.pattern;

      if ($input.value === "") {
        
      }
      
      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value) 
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active");
      };

      if (!pattern) {
        return $input.value === ""
        ? d.getElementById($input.name).classList.add("is-active")
        : d.getElementById($input.name).classList.remove("is-active");
      };
    };
  });

  d.addEventListener("submit", e => {    
    const $loader = d.querySelector(".contactForm .loader"),
    $response = d.querySelector(".contactForm .response");
      
    $loader.classList.remove("noVisible");
    
    setTimeout(() => {
      $loader.classList.add("noVisible");
      $response.classList.remove("noVisible");
      $contactForm.reset();
      setTimeout(() => $response.classList.add("noVisible"), 3000);
    }, 3000);
  });

};