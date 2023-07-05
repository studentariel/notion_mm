const timeOptions = document.querySelectorAll('.time-option');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const clearButton = document.getElementById('clear');
const backButton = document.getElementById('back');
const timerDisplay = document.querySelector('.timer-display');
const timeRemaining = document.getElementById('time-remaining');
const endTime = document.getElementById('end-time');

let selectedTime = 0;
let timer;

timeOptions.forEach((button) => {
    button.addEventListener('click', () => {
        timeOptions.forEach((btn) => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedTime = parseInt(button.dataset.time, 10);
    });
});

startButton.addEventListener('click', () => {
    if (selectedTime > 0) {
        const now = new Date();
        const end = new Date(now.getTime() + selectedTime * 60 * 1000);
        timerDisplay.style.display = 'block';
        backButton.style.display = 'inline-block';
        // Hide timer options and start button
        document.getElementById('timer-options').style.display = 'none';
        startButton.style.display = 'none';

        timer = setInterval(() => {
            const currentTime = new Date();
            const diff = end - currentTime;
            if (diff <= 0) {
                clearInterval(timer);
            } else {
                timeRemaining.textContent = formatTime(diff);
                endTime.textContent = formatEndTime(end);
            }
        }, 1000);
    }
});

stopButton.addEventListener('click', () => {
    clearInterval(timer);
});

clearButton.addEventListener('click', () => {
    clearInterval(timer);
    timeRemaining.textContent = '';
    endTime.textContent = '';
});

backButton.addEventListener('click', () => {
    clearInterval(timer);
    backButton.style.display = 'none';
    timerDisplay.style.display = 'none';
    timeRemaining.textContent = '';
    endTime.textContent = '';
    // Show timer options and start button
    document.getElementById('timer-options').style.display = 'flex';
    startButton.style.display = 'inline-block';
});

function formatTime(milliseconds) {
    const minutes = Math.floor(milliseconds / (60 * 1000));
    const seconds = Math.floor((milliseconds % (60 * 1000)) / 1000);
    return `${minutes}:${seconds < 10 ? '0': ''}${seconds}`;
}

function formatEndTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    return `${formattedHours}:${minutes < 10 ? '0' : ''}${minutes} ${amPm}`;
}
