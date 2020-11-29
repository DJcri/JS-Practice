/*
// Challenge 1 and 2 (Comparing and outputting BMI values)

let heightMark;
let heightJohn;
let weightMark;
let weightJohn;
let bmiMark;
let bmiJohn;
let conclusionText;

// Test Data 1
heightMark = 1.69;
weightMark = 79;

heightJohn = 1.95;
weightJohn = 92;

bmiMark = weightMark / (heightMark ** 2);
bmiJohn = weightJohn / (heightJohn ** 2);
markHigherBMI = bmiMark > bmiJohn;
if (markHigherBMI) {
    conclusionText = `not higher than John's BMI`;
} else {
    conclusionText = `higher than John's BMI`;
}
console.log(`Mark's BMI (${bmiMark}) is ${conclusionText} John's BMI (${bmiJohn}).`);

// Test Data 2 
heightMark = 1.88;
weightMark = 95;

heightJohn = 1.76;
weightJohn = 85;

bmiMark = weightMark / (heightMark ** 2);
bmiJohn = weightJohn / (heightJohn ** 2);
markHigherBMI = bmiMark > bmiJohn;
if (markHigherBMI) {
    conclusionText = `not higher than John's BMI`;
} else {
    conclusionText = `higher than John's BMI`;
}
console.log(`Mark's BMI (${bmiMark}) is ${conclusionText} John's BMI (${bmiJohn}).`);

// Challenge 3 (Comparing and outputting scores with logic statements)

const minScore = 100;
let draw;
let winner;
// Teams: d = Dolphins, k = Koalas 
let d_score1 = 97, d_score2 = 112, d_score3 = 101;
let k_score1 = 109, k_score2 = 95, k_score3 = 106;
let d_averageScore = (d_score1 + d_score2 + d_score3) / 3;
let k_averageScore = (k_score1 + k_score2 + k_score3) / 3;

if (d_averageScore >= minScore && k_averageScore < minScore) {
    winner = `Dolphins`;
} else if (k_averageScore >= minScore && d_averageScore < minScore) {
    winner = `Koalas`;
}

console.log(`The average score of Dolphins is ${d_averageScore} and the average score of Koalas is ${k_averageScore}`);
if (winner) {
    console.log(`${winner} wins!`)
}
else if (d_averageScore >= minScore && k_averageScore >= minScore) {
    console.log(`It's a draw!`)
}
else {
    console.log(`No team wins!`)
}

// Challenge 4 (Calculate tip depending on bill)

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
console.log(`The bill is $${bill}, the tip is $${tip}, and the total is $${bill + tip}`)
*/

// Start of fundamentals part 2

`use strict`;
/*
// Challenge 1 Use functions to determine winner

const calcAverage = (a, b, c) => (a + b + c) / 3;

function checkWinner() {
    const dolphins = calcAverage(85, 54, 41)
    const koalas = calcAverage(23, 34, 27)
    let winner;
    if (dolphins >= koalas * 2) {
        winner = "Dolphins";
    } else if (koalas >= dolphins * 2) {
        winner = "Koalas";
    }
    if (winner) {
        console.log(`${winner} win! (${dolphins} vs. ${koalas})`)
    } else {
        console.log(`No one wins!`)
    }
}

checkWinner();

// Challenge 2 Calculate tip using functions and arrays

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

const bills = [125, 555, 44];
const tips = [
    (calcTip(bills[0])),
    (calcTip(bills[1])),
    (calcTip(bills[2]))
];
const totals = [
    (tips[0] + bills[0]),
    (tips[1] + bills[1]),
    (tips[2] + bills[2])
];

console.log(tips)
console.log(totals)

// Object Challenge construct a sentence using an object

const jonas = {
    firstName: `Jonas`,
    friends: [`Michael`, `Peter`, `Steven`]
}

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)

// Challenge 3 Use objects to calculate BMIs

const mark = {
    firstName: `Mark`,
    lastName: `Miller`,
    fullName: function () { return `${this.firstName} ${this.lastName}`; },
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    firstName: `John`,
    lastName: `Smith`,
    fullName: function () { return `${this.firstName} ${this.lastName}`; },
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
}

const higherBMI = mark.calcBMI() > john.calcBMI() ? mark : john;
const lowerBMI = higherBMI === mark ? john : mark;

console.log(`${higherBMI.fullName()}'s BMI (${higherBMI.bmi}) is higher than ${lowerBMI.fullName()}'s BMI (${lowerBMI.bmi})`)
*/
// Challenge 4 Calculate tips using loops

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => {
    let p = bill >= 50 && bill <= 300 ? .15 : .2;
    return bill * p;
};

const calcAverage = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    return sum / arr.length;
};

for (let i = 0; i < bills.length; i++) {
    let tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(calcAverage(tips));
console.log(calcAverage(totals));
