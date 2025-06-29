const blurbHat = ['"Group Fantasy For Individuals."', '"Thoughts to Forget."', '"Words to Sleep By."', '"The Future is Old"', '"Born Old."', '"Not too complex!"'];
const blurb = blurbHat[Math.floor(Math.random()*blurbHat.length)];

document.getElementById("blurb").innerHTML = blurb;