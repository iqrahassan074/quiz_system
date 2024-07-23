import inquirer from "inquirer";

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
} = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "what is the correct way to check if two values are not equal in typescript",
        choices: ["a==b","a===b","a=b","a!===b"]
    },
    {
        name: "question_2",
        type: "list",
        message: "which of the following characters  is commonly allowed in variable names in typescript",
        choices: ["$","@",'#',"&"]
    },
    {
        name: "question_3",
        type: "list",
        message: "which operator is commonly used for string concatenation in typescript",
        choices: ["+","-","*","/"]
    },
    {
        name: "question_4",
        type: "list",
        message: "in typescript is symbol is commonly used for terminate a statement",
        choices: [".",":",";",","]
    },
    {
        name: "question_5",
        type: "list",
        message: "which mathod of inquirer.js is used to start the prompt interface and recieve user input?",
        choices: ["start()","prompt()","init()","run()"]
    },

]); 

let score: number = 0;

switch(quiz.question_1){
    case "a!==b": 
    console.log("1.correct!");
    ++ score;
    break;
    default: 
    console.log("1.incorrect!");


}

switch(quiz.question_2){
    case "$": 
    console.log("2.correct!");
    ++ score;
    break;
    default: 
    console.log("2.incorrect!"); 
}

switch(quiz.question_3){
    case "+": 
    console.log("3.correct!");
    ++ score;
    break;
    default: 
    console.log("3.incorrect!");

}

switch(quiz.question_4){
    case ";": 
    console.log("4.correct!");
    ++ score;
    break;
    default: 
    console.log("4.incorrect!");
}

switch(quiz.question_5){
    case "prompt()": 
    console.log("5.correct!");
    ++ score;
    break;
    default: 
    console.log("5.incorrect!");


        console.log(`score: ${score}`);
}    
    


  























