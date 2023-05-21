let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timer;

function startTimer() {
  timer = setInterval(updateTimer, 10);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
}

function updateTimer() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('minutes').textContent = padTime(minutes);
  document.getElementById('seconds').textContent = padTime(seconds);
  document.getElementById('milliseconds').textContent = padTime(milliseconds);
}

function padTime(time) {
  return time.toString().padStart(2, '0');
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);
