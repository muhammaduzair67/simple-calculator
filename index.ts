#! /usr/bin/env node

import inquirer from "inquirer";

// printing a wellcome message
console.log("\n\twelcome to \'codewithuzair\' -CLI Simple Calculator\n");


// Asking Question from user through Inquirer

let answer = await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "firstnumber"}, 
    {message: "Enter second number", type:"number", name:"secondnumber"},
    {message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["addition", "subtractions", "multipication", "division"],
      },
]);

// conditional statement if-else

if(answer.operator === "addition"){
    console.log(answer.firstnumber + answer.secondnumber)
}
else if(answer.operator === "subtractions"){
    console.log(answer.firstnumber - answer.secondnumber)
}
else if(answer.operator === "multipication"){
    console.log(answer.firstnumber * answer.secondnumber)
}
else if 
(answer.operator === "division"){
    console.log(answer.firstnumber / answer.secondnumber)
}
else{
    console.log("invalid input")
}
    
