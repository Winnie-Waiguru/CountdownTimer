let counter = document.querySelectorAll(".counter p");

const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

let interval;

function updateCounter(index, value) {
  counter[index].innerHTML = value.toString().padStart(2, "0");
}

function calculateTimeRemaining() {
  // Set your launch date and convert it to milliseconds
  let launchDate = new Date("2024-12-1").getTime();

  //Get today's date in milliseconds
  let today = new Date().getTime();
  let remainingTime = launchDate - today;

  if (remainingTime <= 0) {
    clearInterval(interval);
    interval = null;
    // replacement for counter[0].innerHTML = "00";
    for (let i = 0; i < counter.length; i++) {
      updateCounter(i, "00");
    }
  } else {
    let remainingdays = Math.floor(remainingTime / days);
    let remaininghours = Math.floor((remainingTime % days) / hours);
    let remainingminutes = Math.floor((remainingTime % hours) / minutes);
    let remainingseconds = Math.floor((remainingTime % minutes) / seconds);

    //   Update countdown timer on the page
    //  replacement for counter[0].innerHTML = remainingdays.toString().padStart(2, "0");
    updateCounter(0, remainingdays);
    updateCounter(1, remaininghours);
    updateCounter(2, remainingminutes);
    updateCounter(3, remainingseconds);
  }
}

function updateCountdownTimer() {
  if (!interval) {
    interval = setInterval(calculateTimeRemaining, 1000);
  }
}

calculateTimeRemaining();
updateCountdownTimer();
