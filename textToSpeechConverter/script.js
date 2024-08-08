let speech = new SpeechSynthesisUtterance();
let button = document.querySelector("button");
let textarea = document.querySelector("textarea");
let voiceSelect = document.querySelector("select");

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  // Log voice details
  for (let i = 0; i < voices.length; i++) {
    const voice = voices[i];
    const option = new Option(voice.name, i);
    voiceSelect.add(option);
  }
};

button.addEventListener("click", () => {
  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
});

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});
