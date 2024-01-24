
let speech = new SpeechSynthesisUtterance(); // create instance of this class(t is empty right now)
const listenBnt = document.querySelector("#listen");

let voices = [];
let voiceSelctor = document.querySelector("#select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

voices.forEach((voice,i) =>(voiceSelctor.options[i] = new Option(voice.name,i)))
}
voiceSelctor.addEventListener("change",()=>{
speech.voice = voices[voiceSelctor.value];
}
)
listenBnt.addEventListener("click",()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
})
