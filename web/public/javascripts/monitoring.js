var socket = io();
socket.on("monitoring", (v) => {
  console.log(v.value)
  adjustSpecificBoxHeight(".box_1", v.value)
});

socket.on("plogging", (v) => {
  console.log("plogging: " + v.value)
});

function updateTime() {
  const now = new Date();
  const dateElement = document.querySelector(".date");
  const timeElement = document.querySelector(".time");

  const dateOptions = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
  };

  const timeOptions = {
      hour: "2-digit",
      minute: "2-digit"
  };

  dateElement.textContent = now.toLocaleDateString("ko-KR", dateOptions);
  timeElement.textContent = now.toLocaleTimeString("ko-KR", timeOptions);
}

// 매 초마다 시간을 갱신합니다.
setInterval(updateTime, 1000);

function navigateToPlogging() {
  // 다른 페이지로 이동합니다.
  window.location.href = "plogging.html";
}


function getRandomPercent() {
  return Math.floor(Math.random() * 100) + 1;
}

function adjustBoxHeight() {
  // const boxes = document.querySelectorAll(".box_1, .box_2, .box_3");
  const boxes = document.querySelectorAll(".box_2, .box_3");

  boxes.forEach(function(box) {
    const percentElement = box.querySelector(".percent");
    const randomPercent = getRandomPercent();
    percentElement.textContent = randomPercent + "%"; // Display random percentage
    const percentValue = randomPercent;
    const maxHeight = 200; // Maximum height desired
    const minHeight = 50;  // Minimum height desired

    const calculatedHeight = (percentValue / 100) * (maxHeight - minHeight) + minHeight;
    box.style.height = calculatedHeight + "px";
  });
}

// Contoh penggunaan
const sensorValue = 100;
const resultPercentage = convertToPercentage(sensorValue);
console.log(`${sensorValue} sensor value is equivalent to ${resultPercentage}%`);



function adjustSpecificBoxHeight(name, percentage) {
  const box = document.querySelector(name);
  // anggep percentage itu valuenya ( sensor value )

  const percentElement = box.querySelector(".percent");
  let value = (percentage / 100) * 10
  percentElement.textContent = value + "%";
  const percentValue = percentage;
  const maxHeight = 200;
  const minHeight = 50;

  const calculatedHeight = (percentValue / 100) * (maxHeight - minHeight) + minHeight;
  box.style.height = calculatedHeight + "px";
}

document.addEventListener("DOMContentLoaded", function() {
  adjustBoxHeight();
});

