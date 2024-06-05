#!/usr/bin/env node

import inquirer from "inquirer";



const answwer:{
sentence :string
}= await inquirer.prompt ([{

    name :"sentence",
    type : "input",
    message : "enter your sentence to count the words",
}]) ;
const word = answwer.sentence.trim().split(" ")

console.log(word);
console.log(`your length of sentence is ${word.length}`);


