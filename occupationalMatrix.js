const matrix = [
    ["Feedback enthusiast", "Cybernetician", "Jargon Proponent", "Dreamer", "Paramusical", "Jokester"],
    ["Tea Zealot", "Musician", "Improvisor", "Synthesynthesist", "Bergsonist"],
    ["College Student", "Solid Guy", "Electrical Engineer", "Good Test Taker", "Instrumentist", "Multi-disciplinary Creative"]
];

const red1 = matrix[0][Math.floor(Math.random()*matrix[0].length)];
const red2 = matrix[1][Math.floor(Math.random()*matrix[1].length)];
const red3 = matrix[2][Math.floor(Math.random()*matrix[2].length)];

document.getElementById("redWord1").innerHTML = red1;
document.getElementById("redWord2").innerHTML = red2;
document.getElementById("redWord3").innerHTML = red3;
