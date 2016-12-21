var inquirer = require('inquirer');

// function BasicFlashcard(question, answer){
// 	this.question = question,
// 	this.answer = answer;
// }

// BasicFlashcard.prototype.printInfo = function(){
// 	console.log("Questions: " + this.question + "\nAnswer: " + this.answer);
// };

// var askQuestion = function(){
	inquirer.prompt([
	{
		type: 'input',
		name: 'question_one',
		message: 'What animal is on the Canadian quarter?',
	},
	{
		type: 'input',
		name: 'question_two',
		message: 'What is the most recent territory in Canada called?',
	},
	{
		type: 'input',
		name: 'question_three',
		message: 'How many national languages does Canada have?',
	}]).then(function(answers){

	// });
});

