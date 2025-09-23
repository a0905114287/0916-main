const readline = require("readline-sync");

var weight=readline.question("Ur weight? (KG)");
var height=readline.question("Ur height? (cm)");
var bmi=weight/((height/100)**2);


console.log("Your BMI is: "+bmi);