const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
  header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};


function displayTime(){
  var dateTime = new Date();
  var hrs = dateTime.getHours();
  var min = dateTime.getMinutes();
  var sec = dateTime.getSeconds();
  var session = document.getElementById("session");

  if(hrs >= 12){
    session.innerHTML = "PM";
  }else{
    session.innerHTML = "AM";
  }

  document.getElementById("hours").innerHTML = hrs;
  document.getElementById("minutes").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}
  setInterval(displayTime, 10);

let span = document.getElementById("closeBtn");
let fullImg = document.getElementById("fullImg");
let fullImgBox = document.getElementById("fullImgBox");

let formBtn = document.querySelector("#login-btn")
let loginForm = document.querySelector(".login-form-container")
let formClose = document.querySelector("#form-close")

formBtn.addEventListener("click", () =>{
  loginForm.classList.add("active");
});

formClose.addEventListener("click", () =>{
  loginForm.classList.remove("active"); 
});
 

 let yearSpan = document.querySelector("#currentYear");
 let currentYear = new Date();
 yearSpan.innerText = currentYear.getFullYear();
