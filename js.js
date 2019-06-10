
function showTime() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  h = ("0" + h).slice(-2);
  m = ("0" + m).slice(-2);
  s = ("0" + s).slice(-2);
  let target = document.querySelector(".time");
  target.innerHTML = "Godzina:" + '&nbsp;' + '<b>' + h + ":" + m + ":" + s + '</b>';
}
function showDate() {
  let date = new Date();
  let D = date.getDate();
  let M = date.getMonth() + 1; //miesiące zaczynają się od zera nie od jedynki
  let Y = date.getFullYear();
  D = ("0" + D).slice(-2);
  M = ("0" + M).slice(-2);
  let target = document.querySelector(".date");
  target.innerHTML = "Data:" + '&nbsp;' + '<b>' + D + "." + M + "." + Y + '</b>';
}
setInterval(showTime, 1000);
setInterval(showDate, 1000);

function changeCSS() {
  let container = document.querySelector(".container");
  let btn = document.querySelector("#info");
  if (container.classList.contains("showing-time")) {
    container.classList.remove("showing-time");
    container.classList.add("showing-date");
    container.style.left = "-50%";
    btn.style.backgroundPosition = "right";
  } else if (container.classList.contains("showing-date")) {
    container.classList.remove("showing-date");
    container.classList.add("showing-time");
    container.style.left = "50%";
    btn.style.backgroundPosition = "left";
  } else {
    return;
  }
}

let clickTarget = document.querySelector("#info");
clickTarget.addEventListener(
  "click",
  function() {
    changeCSS();
  },
  false
);

showTime();
showDate();
