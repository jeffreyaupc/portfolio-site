var blinkEle = document.getElementById("btn-notice");
var blinkHtml = document.getElementById("noticeMsg");
var blinkIcon = document.getElementById("noticeIcon");
var mainContainer = document.getElementById("mainContainer");

function blink() {
  blinkEle.style.opacity = blinkEle.style.opacity == "0" ? "1" : "0";
}

var blinkblink = setInterval(blink, 800);

function showProfile() {
  mainContainer.style.opacity = "1";
}

function clickMsg() {
  clearInterval(blinkblink);
  blinkEle.style.opacity = "1";
  blinkHtml.innerHTML = "You have no new notification";
  blinkIcon.innerHTML = "<i class='fas fa-envelope-open'></i>";
  blinkIcon.style.marginTop = "-0.5rem";
  blinkIcon.style.color = "grey";
  blinkEle.style.color = "grey";
  mainContainer.style.opacity = "1";
}

blinkEle.addEventListener("click", clickMsg);
