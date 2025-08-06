const plateHat = ["DemoPlates1.jpg", "DemoPlates.jpg", "DemoPlates.jpg"];
const plate = plateHat[Math.floor(Math.random()*plateHat.length)];

document.getElementById("plate").src = plate;