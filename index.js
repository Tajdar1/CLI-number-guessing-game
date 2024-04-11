#! /usr/bin/env node
import inquirer from "inquirer";
console.log("welcome to number guessing game");
const randomnumber = Math.floor(Math.random() * 3 + 1);
const answer = await inquirer.prompt({
    name: "userguessednumber",
    type: "number",
    message: "enter your guessed number(between 1 & 3)",
});
if (answer.userguessednumber === randomnumber) {
    console.log("congratulations you guessed correct Number");
}
else
    (console.log("you guessed wrong number"));
