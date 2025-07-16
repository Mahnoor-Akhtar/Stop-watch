let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

function updateDisplay() {
    display.textContent = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        display.classList.add('running'); // Add pulse animation
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 1000);
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        display.classList.remove('running'); // Remove animation
    }
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize display
updateDisplay();