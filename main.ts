#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000; // Dollar
let pinCode = 2345;

let pinAnswer = await inquirer.prompt([
    { 
        name: "pin",
        message: "enter your pin:",
        type: "number"
    }
]);

if (pinAnswer.pin === pinCode) {
    console.log("Your pin is correct");

    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);

    console.log(operationAnswer);

    if (operationAnswer.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient Balance");
        } else {
            myBalance -= amountAns.amount;
            console.log(amountAns.amount + " withdrawn successfully");
            console.log("Your remaining balance is: " + myBalance);
        }
    } else if (operationAnswer.operation === "check balance") {
        console.log("Your balance is: " + myBalance);
    }
} else {
    console.log("Your pin is incorrect");
}
