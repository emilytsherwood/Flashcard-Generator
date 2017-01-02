// var prompt = require('prompt');
// var studentOne = [];
// var inquirer = require('inquirer');

function Basic(question, answer){
	this.question = question;
	this.answer = answer;
	this.print = function() {
		console.log('question: ' + this.question);
		console.log('answer: ' + this.question);
	};
}

// prompt.start();

// function flashcard() {
// prompt.get(['question', 'answer'], function(err, result) {
// 	console.log('question: ' + result.question);
// 	console.log('answer: ' + result.answer);
// 	studentOne.push(result.question, result.answer);
// 	console.log(studentOne);

// var newStudent = new Basic(result.question, result.answer); 
// 	// var studentOne = new Basic(result.question, result.answer);
// });
// }

// flashcard();


// Basic.prototype.getBasic = function(){
// 	return this.question;
// };

// var firstQuestion = new Basic('');
// console.log(firstQuestion.getBasic());


// var inquirer = require('inquirer');



// function BasicFlashcard(question, answer){
// 	this.question = question,
// 	this.answer = answer;
// }

// Basic.prototype.printInfo = function(){
// 	console.log("Front: " + this.question + "\nBack: " + this.answer);
// };

// var askQuestion = function(){
// 	inquirer.prompt([
// 	{
// 		type: 'input',
// 		name: 'front',
// 		message: 'Type the front of your flashcard'
// 	},
// 	{
// 		type: 'input',
// 		name: 'back',
// 		message: 'Type the back of your flashcard'
// 	}]).then(function(answers){

// 		var newStudent = new Basic(answers.front, answers.back);
// 		newStudent.printInfo();
// 	askQuestion();
// });
