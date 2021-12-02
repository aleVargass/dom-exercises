export default function narrator() {
  const $textarea = document.querySelector(".narrator .textarea");
  const $readButton = document.querySelector(".narrator .readButton")
  const $select = document.querySelector(".narrator .select");
  const speechMsg = new SpeechSynthesisUtterance();  
  let voices = window.speechSynthesis.getVoices(); 

//Si se hace con forEach no contamos con iterador.
//Al asignar una voz es más fácil con el iterador.
  for(let i = 0; i < voices.length; i++) {
  let $option = document.createElement('option');
  $option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  $option.value = i;
  $select.appendChild($option);
}

  document.addEventListener("change", e => {
    if (e.target === $select) {
    speechMsg.voice = voices[$select.value];
    };
  });

  document.addEventListener("click", e => {
    if (e.target === $readButton) {
      speechMsg.text = $textarea.value;
      window.speechSynthesis.speak(speechMsg);
    };
  });

};