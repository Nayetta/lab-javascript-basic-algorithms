console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Noemi";
let hacker2 = "Noemi tambe";
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let driver = hacker1.length;
let navigator = hacker2.length;

if (driver > navigator) {
  console.log(`The driver has the longest name, it has ${driver} characters.`);
} else if (driver < navigator) {
  console.log(
    `It seems that the navigator has the longest name, it has ${navigator} characters.`
  );
} else if (driver === navigator) {
  console.log(`Wow, you both have equally long names, ${driver} characters!`);
} else {
  console.log("hey... ehhhm... something happened...");
}

// Iteration 3: Loops
// resultat: el nom del driver ha de sortir lletra a lletra i en majuscula
let capitals = "";
for (let i = 0; i < hacker1.length; i++) {
  capitals = capitals + hacker1[i] + " ";
}
console.log(capitals.toUpperCase());

// resultat: el nom del navegator ha de sortir del reves

let reverse = "";
for (let i = 0; i < hacker2.length; i++) {
  reverse = hacker2[i] + reverse;
}
console.log(reverse);

//comparació per ordre alfabetic

if (capitals > reverse) {
  console.log("The driver's name goes first.");
} else if (reverse > capitals) {
  console.log("Yo, the navigator goes first definitely");
} else if (capitals == reverse) {
  console.log("What?! You both have the same name?");
} else {
  console.log("Oh dear... we should have a mistake");
}

//BONUS 1
//??? com es posa el lorem ipsum be??
// import { LoremIpsum } from "lorem-ipsum";

// const lorem = new LoremIpsum({
//   sentencesPerParagraph: {
//     max: 8,
//     min: 4,
//   },
//   wordsPerSentence: {
//     max: 16,
//     min: 4,
//   },
// });

// let paragrafs = lorem.generateParagraphs(3);

// console.log(paragrafs);

// let paraules = paragrafs.split(" ");

// console.log(paraules.length);

// console.log(paragrafs.split(" et ").length - 1);

//BONUS 2

let phraseToCheck = "amor roma";

let reves = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  reves = phraseToCheck[i] + reves;
}
console.log(reves);

if (phraseToCheck == reves) {
  console.log("Yes it is a palindome");
} else {
  console.log("Oh dear... it is not, sorry");
}
