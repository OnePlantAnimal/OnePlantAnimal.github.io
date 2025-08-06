const matrix = [
    ["a", "an", "a", "an", "a", "an", "a", "an", "a", "a"],
    ["Huge", "Unrepentant", "Wayward", "Evil", "Suspicious", "Untimely", "Greasy", "Awesome", "Teeny-Tiny", "Jocular"],
    ["Machine", "Feedback enthusiast", "Cybernetician", "Jargon Proponent", "Dreamer", "Paramusical", "Jokester", "Thing", "Bungler"],
    ["Tea Zealot", "Musician", "Improvisor", "Synthesynthesist", "Bergsonist", "Elitist", "Lout", "Creature"],
    ["College Student", "Hoon", "Solid Guy", "Electrical Engineer", "Instrumentist", "Multi-disciplinary Creative", "Schemer", "Future Old Man, God Willing"]
];

const firstRand = Math.floor(Math.random()*matrix[0].length);
const aan = matrix[0][firstRand];
const red1 = matrix[1][firstRand];
const red2 = matrix[2][Math.floor(Math.random()*matrix[2].length)];
const red3 = matrix[3][Math.floor(Math.random()*matrix[3].length)];
const red4 = matrix[4][Math.floor(Math.random()*matrix[4].length)];

document.getElementById("aan").innerHTML = aan;
document.getElementById("redWord1").innerHTML = red1;
document.getElementById("redWord2").innerHTML = red2;
document.getElementById("redWord3").innerHTML = red3;
document.getElementById("redWord4").innerHTML = red4;
