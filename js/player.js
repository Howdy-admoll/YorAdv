function store(){ //stores items in the localStorage
  var brand = document.getElementById('text').value;

  const text = {
      gbolohun: text,
  }

  window.localStorage.setItem(key,JSON.stringify(text));  
  //converting object to string
}

function retrieveRecords(){ //retrieves items in the localStorage
  var key = document.getElementById('text').value; //gets key from user
  console.log("retrive records");
  var records = window.localStorage.getItem(text); //searches for the key in localStorage
  var paragraph = document.createElement("p");
  var infor = document.createTextNode(records);
  paragraph.appendChild(infor);
  var element = document.getElementById("adv");
  element.appendChild(paragraph);
}

window.onload =function(){ //ensures the page is loaded before functions are executed.
  document.getElementById("text").onsubmit = store
  // document.getElementById("clearButton").onclick = clearStorage
  // document.getElementById("removeButton").onclick = removeItem
  document.getElementById("retrieve").onclick = retrieveRecords
}

// =======================================================
const playButton = document.getElementById('play-button')
const pauseButton = document.getElementById('pause-button')
const stopButton = document.getElementById('stop-button')
const textInput = document.getElementById('text')
const speedInput = document.getElementById('speed')
let currentCharacter

playButton.addEventListener('click', () => {
  playText(textInput.value)
})
pauseButton.addEventListener('click', pauseText)
stopButton.addEventListener('click', stopText)
speedInput.addEventListener('input', () => {
  stopText()
  playText(utterance.text.substring(currentCharacter))
})

const utterance = new SpeechSynthesisUtterance()
utterance.addEventListener('end', () => {
  textInput.disabled = false
})
utterance.addEventListener('boundary', e => {
  currentCharacter = e.charIndex
})

function playText(text) {
  if (speechSynthesis.paused && speechSynthesis.speaking) {
    return speechSynthesis.resume()
  }
  if (speechSynthesis.speaking) return
  utterance.text = text
  utterance.rate = speedInput.value || 1
  textInput.disabled = true
  speechSynthesis.speak(utterance)
}

function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause()
}

function stopText() {
  speechSynthesis.resume()
  speechSynthesis.cancel()
}

// I'm continue this in a bit
