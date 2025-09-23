const readline = require("readline-sync");

var weight=0;
while(weight<10 || weight>120){
    readline.question("Ur weight? (KG)");
}
var height=0;
while(height<100 || height>200){
    readline.question("Ur height? (cm)");
}
var bmi=weight/((height/100)**2);


console.log("Your BMI is: "+bmi);