/* Challenge 1 and 2 (Comparing and outputting BMI values) */

let heightMark;
let heightJohn;
let weightMark;
let weightJohn;
let bmiMark;
let bmiJohn;
let conclusionText;

/* Test Data 1 */
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

/* Test Data 2 */
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

/* Challenge 3 (Comparing and outputting scores with logic statements) */

const minScore = 100;
let draw;
let winner;
/* Teams: d = Dolphins, k = Koalas */
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

/* Challenge 4 (Calculate tip depending on bill) */

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
console.log(`The bill is $${bill}, the tip is $${tip}, and the total is $${bill + tip}`)