const timer = document.getElementById("timer");
const hoursInput = document.getElementById("hours-input");
// const Hours = document.querySelector("hours");
const Hours = document.getElementById("hours");
const minutesInput = document.getElementById("minutes-input");
const Minutes = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds-input");
// const Seconds = document.querySelector("#seconds");
const Seconds = document.getElementById("seconds");
const startButton = document.getElementById("start-button");
const resetButton = document.getElementById("reset-button");
const audio = document.getElementById("audio");

let intervalId = null;

function startTimer() {
  let hours = parseInt(hoursInput.value);
  let minutes = parseInt(minutesInput.value);
  let seconds = parseInt(secondsInput.value);
  let totalSeconds = hours * 3600 + minutes * 60 + seconds;
  hoursInput.value = 0;
  minutesInput.value = 0;
  //   secondsInput.innerText = "0";
  secondsInput.value = 0;

  if (totalSeconds > 0) {
    intervalId = setInterval(() => {
      hours = Math.floor(totalSeconds / 3600);
      minutes = Math.floor((totalSeconds % 3600) / 60);
      seconds = totalSeconds % 60;
      timer.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      if (totalSeconds == 0) {
        clearInterval(intervalId);
        audio.play();
        alert("Time's up!");
      } else {
        totalSeconds--;
      }
    }, 1000);

    startButton.disabled = true;
  }
}
// function sound() {
//   // clearInterval(intervalId);
//   audio.play();
//   alert("Time's up!");
// }
function resetTimer() {
  clearInterval(intervalId);
  let hours = "00";
  let minutes = "00";
  let seconds = "00";

  //   timer.innerHTML = `${hours.toString()}:${minutes.toString()}:${seconds.toString()}`;
  //   Hours.textContent = hours;
  //   Seconds.textContent = seconds;
  hoursInput.value = 0;
  minutesInput.value = 0;
  //   secondsInput.innerText = "0";
  secondsInput.value = 0;
  timer.innerHTML = `${hours}:${minutes}:${seconds}`;

  //   timer.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes
  //     .toString()
  //     .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
// const startButton = document.getElementById("start-button");
