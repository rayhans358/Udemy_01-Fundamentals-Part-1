// 2.16 Coding Challenge 1 \\
//Answer : 
let data1 = "Data 1";
let name1 = "BMI Mark";
let mark1 = 78 / 1.69 ** 2;
let result1 = name1 + " = " + mark1;
let mark2 = 95 / 1.88 ** 2;
let result2 = name1 + " = " + mark2;
let name2 = "BMI John";
let john1 = 92 / (1.95 ** 2);
let result3 = name2 + " = " + john1;
let john2 = 85 / (1.76 ** 2);
let result4 = name2 + " = " + john2;
const markHigherBMI1 = mark1 > john1;
const markHigherBMI2 = mark2 > john2;
console.log(data1);
console.log(result1, result3);
console.log(result2, result4);
console.log(markHigherBMI1); 
console.log(markHigherBMI2);

// 2.19 Coding Challenge 2 \\
//Answer : 
let name1 = "BMI Mark";
let mark1 = 78 / 1.69 ** 2;
let result1 = name1 + " = " + mark1;
let mark2 = 95 / 1.88 ** 2;
let result2 = name1 + " = " + mark2;
let name2 = "BMI John";
let john1 = 92 / (1.95 ** 2);
let result3 = name2 + " = " + john1;
let john2 = 85 / (1.76 ** 2);
let result4 = name2 + " = " + john2;
const markHigherBMI1 = mark1 > john1;
const markHigherBMI2 = mark2 > john2;
console.log(result1, result3);
console.log(result2, result4);
console.log(markHigherBMI1); 
console.log(markHigherBMI2);
if (markHigherBMI1) {
  console.log(`Mark's BMI is higher than John's!`)
} else {
  console.log(`John's BMI is higher than Mark's!`)
};
if (markHigherBMI2) {
  console.log(`Mark's BMI (${mark2}) is higher than John's BMI (${john2}!`)
} else {
  console.log(`John's BMI (${john2} is higher than Mark's BMI (${mark2})!`)
};

// 2.25 Coding Challenge 3 \\
//Answer :
let data1 = "Data 1";
const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;
let result1 = "score average dolphins" + " = " + dolphins;
let result2 = "score average koalas" + " = " + koalas;
const averageScore = (dolphins + koalas) / 2;

console.log(data1);
console.log(result1);
console.log(result2);
console.log(dolphins, koalas, averageScore);
if (dolphins > koalas) {
  console.log('Dolphins win the trophy');
} else if(koalas > dolphin) {
  console.log('Koalas win the trophy');
} else if(dolphin === koalas) {
  console.log('both win the thropy');
}

//Bonus 1
let bonus1 = "Bonus 1";
const dolphin = (97 + 112 + 101) / 3;
const koalas = (109 + 95 + 123) / 3;
let result1 = "score average dolphins" + " = " + dolphins;
let result2 = "score average koalas" + " = " + koalas;
const averageScore = (dolphins + koalas) / 2;
const result3 = "score average 2 animal" + " = " + averageScore;

console.log(bonus1);
console.log(result1);
console.log(result2);
console.log(result3);
if (dolphins > koalas && dolphins >= 100) {
  console.log('Dolphins win the trophy');
} else if(koalas > dolphin && koalas >= 100) {
  console.log('Koalas win the trophy');
} else if(dolphin === koalass) {
  console.log('both win the thropy');
}

//Bonus 2
let bonus2 = "Bonus 2";
const dolphins = (97 + 112 + 101) / 3;
const koalas = (109 + 95 + 106) / 3;
let result1 = "score average dolphins" + " = " + dolphins;
let result2 = "score average koalas" + " = " + koalas;
const averageScore = (dolphins + koalas) / 2;
const result3 = "score average 2 animal" + " = " + averageScore;

console.log(bonus2);
console.log(result1);
console.log(result2);
console.log(result3);
if (dolphins > koalas && dolphins >= 100) {
  console.log('Dolphins win the trophy');
} else if(koalas > dolphins && koalas >= 100) {
  console.log('Koalas win trophy');
} else if(dolphins === koalas && dolphins >= 100 && koalas >= 100) {
  console.log('both win the thropy');
} else {
  console.log('No one wins the trophy');
}

// 2.29 Coding Challenge 4 \\
//Answers
const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

//OR

const bill = 430;
if (bill <= 300 && bill >= 50) {
  tip = bill * 0.15;
} else {
  tip = bill * 0.2;
}
const total = bill + tip;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`);