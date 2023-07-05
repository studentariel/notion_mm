const customTimeInput = document.getElementById('customTime');
const presetButtons = document.querySelectorAll('.preset');
const startTimerButton = document.getElementById('startTimer');
const stopTimerButton = document.getElementById('stopTimer');
const clearTimerButton = document.getElementById('clearTimer');
let timerInterval = null;

function startTimer() {
  const timerDuration = customTimeInput.value;
  if (timerDuration) {
    const now = new Date();
    const endTime = new Date(now.getTime() + timerDuration * 60000);
    window.location.href = `output.html?endTime=${endTime.toISOString()}`;
  }
}

presetButtons.forEach(button => {
  button.addEventListener('click', () => {
    customTimeInput.value = button.dataset.time;
  });
});

startTimerButton.addEventListener('click', () => {
  startTimer();
});

stopTimerButton.addEventListener('click', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

clearTimerButton.addEventListener('click', () => {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  customTimeInput.value = '';
});
