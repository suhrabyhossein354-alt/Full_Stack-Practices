// -----------------
const startB = document.getElementById("start");
const pauseB = document.getElementById("pause");
const resetB = document.getElementById("reset");
const bars = document.querySelectorAll(".sBar");

let timer = 0;
let status = null;

// -----------------

const digitMap = {
  0: ["a", "c", "d", "e", "f", "g"],
  1: ["f", "g"],
  2: ["a", "b", "c", "e", "f"],
  3: ["a", "b", "c", "f", "g"],
  4: ["b", "d", "f", "g"],
  5: ["a", "b", "c", "d", "g"],
  6: ["a", "b", "c", "d", "e", "g"],
  7: ["a", "f", "g"],
  8: ["a", "b", "c", "d", "e", "f", "g"],
  9: ["a", "b", "c", "d", "f", "g"],
};

// -----------------

function showDigit(bar, number) {
  let digit = digitMap[number];
  bar.querySelectorAll(".segment").forEach((item) => {
    let className = item.classList;
    let segmentName = "";
    for (const name of "abcdefg") {
      if (className.contains(name)) {
        segmentName = name;
      }
    }
    if (digit.includes(segmentName)) {
      item.classList.replace("off", "on");
    } else {
      item.classList.replace("on", "off");
    }
  });
}

function updateClock(timer) {
  let clockTime;
  let second = timer % 60;
  let minute = Math.floor(timer / 60);

  let sSecond = String(second).padStart(2, "0");
  let sMinute = String(minute).padStart(3, "0");

  clockTime = sMinute.split("").concat(sSecond.split(""));
  console.log(clockTime);
  clockTime.forEach((element, index) => {
    showDigit(bars[index], element);
  });
}

function startTimer() {
  if (status !== null) return;

  status = setInterval(() => {
    timer++;
    updateClock(timer);
    if (timer === 59999) {
      clearInterval(status);
      status = null;
      pauseB.classList.replace("Bon", "Boff");
      resetB.classList.replace("Boff", "Bon");
    }
  }, 1000);
  startB.classList.replace("Bon", "Boff");
  pauseB.classList.replace("Boff", "Bon");
  resetB.classList.replace("Boff", "Bon");
}
function pauseTimer() {
  clearInterval(status);
  status = null;
  startB.classList.replace("Boff", "Bon");
  pauseB.classList.replace("Bon", "Boff");
  resetB.classList.replace("Boff", "Bon");
}
function resetTimer() {
  clearInterval(status);
  status = null;
  timer = 0;
  updateClock(timer);
  startB.classList.replace("Boff", "Bon");
  pauseB.classList.replace("Bon", "Boff");
  resetB.classList.replace("Bon", "Boff");
}

startB.addEventListener("click", startTimer);
pauseB.addEventListener("click", pauseTimer);
resetB.addEventListener("click", resetTimer);
