const customTimeInput = document.getElementById('customTime');
const presetButtons = document.querySelectorAll('.preset');
const startTimerButton = document.getElementById('startTimer');
const stopTimerButton = document.getElementById('stopTimer');
const clearTimerButton = document.getElementById('clearTimer');
const countdownDisplay = document.getElementById('countdown');
const endTimeDisplay = document.getElementById('endTime');

let endTime = null;
let timerInterval = null;

presetButtons.forEach(button => {
  button.addEventListener('click', () => {
    customTimeInput.value = button.dataset.time;
  });
});

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

    endTimeDisplay.textContent = endTime.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  } else {
    countdownDisplay.textContent = '00:00';
    endTimeDisplay.textContent = '00:00';
  }
}

startTimerButton.addEventListener('click', () => {
  const timerDuration = customTimeInput.value;

  if (timerDuration) {
    const now = new Date();
    endTime = new Date(now.getTime() + timerDuration * 60000);

    if (timerInterval) {
      clearInterval(timerInterval);
    }
    timerInterval = setInterval(updateDisplay, 1000);
  }
});

stopTimerButton.addEventListener('click', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
});

clearTimerButton.addEventListener('click', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  endTime = null;
  updateDisplay();
  customTimeInput.value = '';
});
