const readline = require("readline-sync");

var weight=0;
while(weight<10 || weight>120){
    readline.question("Ur weight? (KG)");
}
var height=readline.question("Ur height? (cm)",(limit:'$<70-200>'));
var bmi=weight/((height/100)**2);


console.log("Your BMI is: "+bmi);