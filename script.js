const bottonStart = document.getElementById("start");
const bottonstop = document.getElementById("stop");
const bottonReset = document.getElementById("Reset");
const timerE = document.getElementById("timer");

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function startimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timerE.textContent = formatTime(elapsedTime);
  }, 10);

  bottonStart.disabled = true;
  bottonstop.disabled = false;
}

function formatTime(elapsedTime) {
  const millisesonds = Math.floor((elapsedTime % 1000) / 10);
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
  const Hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  return (
    (Hours ? (Hours > 9 ? Hours : "0" + Hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    ":" +
    (millisesonds > 9 ? millisesonds : "0" + millisesonds)
  );
}

function stoptimer() {
  clearInterval(timerInterval);
  bottonStart.disabled = false;
  bottonstop.disabled = true;
}

function Resetimer() {
  clearInterval(timerInterval);
  timerE.innerHTML = "00:00:00:00";
  elapsedTime = 0;
  bottonStart.disabled = false;
  bottonstop.disabled = true;
}

bottonReset.addEventListener("click", Resetimer);
bottonstop.addEventListener("click", stoptimer);
bottonStart.addEventListener("click", startimer);
