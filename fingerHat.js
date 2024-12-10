const fingerHat = ["fingerCut.png", "fingerFull.png"];
const fingerSrc = fingerHat[Math.floor(Math.random()*fingerHat.length)];
const img = document.getElementById("finger"); 
img.src = fingerSrc;


