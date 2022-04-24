var i = 0;
var speed = 50;
var pageTitle = "WHAT PEOPLE SAY ABOUT US....";
typeWriter();
function typeWriter() {
  if (i < pageTitle.length) {
    document.getElementById("title").innerHTML += pageTitle.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

var colors = ["white", "blue", "yellow", "green"];
var currentColor = 0
var lis = document.querySelectorAll("#testimonail .testimonial .user-name")

function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length -1
    for (var i = 0; i < lis.length; i++) {
      lis[i].style.color = colors[(currentColor +i) % colors.length]
    }
  }

  setInterval(changeColor, 1000)
