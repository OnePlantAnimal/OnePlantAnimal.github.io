const endPicHat = ["Lecture.jpg", "BlurredDemoPlates.jpg"];
const endTextHat = ["Figure 2. Lecturing.", "Figure 2. Preparation."];
const rand = Math.floor(Math.random()*endPicHat.length);
const endPic = endPicHat[rand];
const endText = endTextHat[rand];

document.getElementById("endPic").src = endPic;
document.getElementById("endText").innerHTML = endText;