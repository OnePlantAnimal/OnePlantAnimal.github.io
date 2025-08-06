const blurbHat = ['"Group Fantasy For Individuals."', '"Remember to Forget."', '"The Future is Old"', '"Born Old."', '"Not too complex!"'];
const blurb = blurbHat[Math.floor(Math.random()*blurbHat.length)];

document.getElementById("blurb").innerHTML = blurb;