var blinkEle = document.getElementById("btn-notice");
var blinkHtml = document.getElementById("noticeMsg");
var blinkIcon = document.getElementById("noticeIcon");
var outerContainer = document.getElementById("outerContainer");
var tabProfile = document.getElementById("tab-profile");
var tabJS = document.getElementById("tab-js-app");
var tabResWeb = document.getElementById("tab-res-web");
var contentProfile = document.getElementById("contentProfile");
var profileOne = document.getElementById("profileOne");
var profileTwo = document.getElementById("profileTwo");
var jsOne = document.getElementById("jsOne");
var jsTwo = document.getElementById("jsTwo");
var resWebOne = document.getElementById("resWebOne");
var resWebTwo = document.getElementById("resWebTwo");

// *****trying to make code of switching tabs cleaner by making tabs as a parameter
//      when entered, switch to appropriate tab, but failed******

// var btn = tabProfile || tabJS || tabResWeb;

// btn.addEventListener("click", function (e) {
//   if ((e = tabProfile)) {
//     toProfile();
//   } else if ((e = tabJS)) {
//     toJS();
//   } else if ((e = tabResWeb)) {
//     toResWeb();
//   }
// });

tabProfile.addEventListener("click", toProfile);
tabJS.addEventListener("click", toJS);
tabResWeb.addEventListener("click", toResWeb);

function toJS() {
  tabJS.classList.add("active");
  tabProfile.classList.remove("active");
  tabResWeb.classList.remove("active");
  jsOne.style.display = "block";
  jsTwo.style.display = "block";
  profileOne.style.display = "none";
  profileTwo.style.display = "none";
  resWebOne.style.display = "none";
  resWebTwo.style.display = "none";
  // jsOne.style.opacity = "1"
  // jsTwo.style.opacity = "1";
  // profileOne.style.opacity = "0";
  // profileTwo.style.opacity = "0";
  // resWebOne.style.opacity = "0";
  // resWebTwo.style.opacity = "0";
}

function toResWeb() {
  tabResWeb.classList.add("active");
  tabProfile.classList.remove("active");
  tabJS.classList.remove("active");
  resWebOne.style.display = "block";
  resWebTwo.style.display = "block";
  profileOne.style.display = "none";
  profileTwo.style.display = "none";
  jsOne.style.display = "none";
  jsTwo.style.display = "none";
  // resWebOne.style.opacity = "1";
  // resWebTwo.style.opacity = "1";
  // jsOne.style.opacity = "0";
  // jsTwo.style.opacity = "0";
  // profileOne.style.opacity = "0";
  // profileTwo.style.opacity = "0";
}

function toProfile() {
  tabProfile.classList.add("active");
  tabResWeb.classList.remove("active");
  tabJS.classList.remove("active");
  profileOne.style.display = "block";
  profileTwo.style.display = "block";
  jsOne.style.display = "none";
  jsTwo.style.display = "none";
  resWebOne.style.display = "none";
  resWebTwo.style.display = "none";
  // profileOne.style.opacity = "1";
  // profileTwo.style.opacity = "1";
  // resWebOne.style.opacity = "0";
  // resWebTwo.style.opacity = "0";
  // jsOne.style.opacity = "0";
  // jsTwo.style.opacity = "0";
}

function blink() {
  blinkEle.style.opacity = blinkEle.style.opacity == "0" ? "1" : "0";
}

var blinkblink = setInterval(blink, 800);

function showProfile() {
  outerContainer.style.opacity = "1";
  outerContainer.style.visibility = "visible";
}

function clickMsg() {
  clearInterval(blinkblink);
  blinkEle.style.opacity = "1";
  blinkHtml.innerHTML = "You have no new notification";
  blinkIcon.innerHTML = "<i class='fas fa-envelope-open'></i>";
  blinkIcon.style.marginTop = "-0.5rem";
  blinkIcon.style.color = "grey";
  blinkEle.style.color = "grey";
  showProfile();
}

blinkEle.addEventListener("click", clickMsg);
