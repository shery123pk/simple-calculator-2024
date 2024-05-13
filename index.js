#! /usr/bin/env node
import inquirer from "inquirer";
let answers = await inquirer.prompt(// take input from user
[
    {
        message: "enter first number",
        name: "firstNumber",
        type: "number",
    },
    {
        message: "enter Second number",
        name: "SecondNumber",
        type: "number",
    },
    {
        message: "enter operator to perform action",
        name: "opr",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulus"]
    }
]);
if (answers.opr == "Addition") { // check condition if true then plus both value
    let plus = answers.firstNumber + answers.SecondNumber;
    console.log(plus);
}
else if (answers.opr == "Subtraction") { // check condition if true then minus 
    let minus = answers.firstNumber - answers.SecondNumber;
    console.log(minus);
}
else if (answers.opr == "Multiplication") { // check condition if true then multiply both value
    let multiply = answers.firstNumber * answers.SecondNumber;
    console.log(multiply);
}
else if (answers.opr == "Division") { // check condition if true then divide
    let divide = answers.firstNumber / answers.SecondNumber;
    console.log(divide);
}
else if (answers.opr == "Modulus") { // check condition if true then give remaining value
    let modulus = answers.firstNumber % answers.SecondNumber;
    console.log(modulus);
}
