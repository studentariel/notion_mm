// script-input.js

const customTimeInput = document.getElementById('customTime');
const presetButtons = document.querySelectorAll('.preset');
const startTimerButton = document.getElementById('startTimer');
const stopTimerButton = document.getElementById('stopTimer');
const clearTimerButton = document.getElementById('clearTimer');

presetButtons.forEach(button => {
  button.addEventListener('click', () => {
    customTimeInput.value = button.dataset.time;
  });
});

startTimerButton.addEventListener('click', () => {
  const timerDuration = customTimeInput.value;

  if (timerDuration) {
    const now = new Date();
    const endTime = new Date(now.getTime() + timerDuration * 60000);
    window.location.href = `output.html?endTime=${endTime.toISOString()}`;
  }
});

// The stop and clear buttons are not needed in the input widget
