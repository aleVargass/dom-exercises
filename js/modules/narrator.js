export default function narrator() {  
  const $textarea = document.getElementById("textareaNarrator");
  const $select = document.getElementById("selectLanguage");
  const $readButton = document.getElementById("readBtn");
  const $speechMessage =  new SpeechSynthesisUtterance();
  
  function populateVoiceList() {
    if(typeof speechSynthesis === 'undefined') {
      return;
    }
    
    let voices = speechSynthesis.getVoices();
    
    for (let i = 0; i < voices.length; i++) {
      let $option = document.createElement('option');
      $option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      $option.value = i;
      $select.appendChild($option);
    }
  }

  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  document.addEventListener("change", e => {
    if (e.target === $select && $speechMessage !== undefined) {
    // $speechMessage.voice = voices[$select.value];
    };
  });

  document.addEventListener("click", e => {
    if (e.target === $readButton) {
      $speechMessage.text = $textarea.value;
      speechSynthesis.speak($speechMessage);
    };
  });  

  let voice2;
  speechSynthesis.onvoiceschanged = populateVoiceList
  voice2 = speechSynthesis.getVoices()
  console.log(voice2);
  console.log(voices);
  console.log("voice2")
    
};