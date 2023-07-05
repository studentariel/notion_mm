const urlParams = new URLSearchParams(window.location.search);
const endTimeParam = urlParams.get('endTime');

const endTime = endTimeParam ? new Date(endTimeParam) : null;
const countdownDisplay = document.getElementById('countdown');

let timerInterval = null;

function updateDisplay() {
  if (endTime) {
    const timeLeft = Math.round((endTime - new Date()) / 1000);

    if (timeLeft <= 0) {
      countdownDisplay.textContent = '00:00';
    } else {
      const minutesLeft = Math.floor(timeLeft / 60).toString().padStart(2, '0');
      const secondsLeft = (timeLeft % 60).toString().padStart(2, '0');
      countdownDisplay.textContent = `${minutesLeft}:${secondsLeft}`;
    }
  } else {
    countdownDisplay.textContent = '00:00';
  }
}

if (endTime) {
  timerInterval = setInterval(updateDisplay, 1000);
}
