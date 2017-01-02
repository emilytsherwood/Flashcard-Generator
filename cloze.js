// var prompt = require('prompt');
// var studentOne = [];
// var inquirer = require('inquirer');

function Cloze(question, answer){
	this.question = question;
	this.answer = answer;
	this.print = function() {
		console.log('answer: ' + this.answer);
	};
}

// prompt.start();

// function cflashcard() {
// prompt.get(['question', 'answer'], function(err, result) {
// 	console.log('answer: ' + result.answer);
// 	studentOne.push(result.question, result.answer);
// 	console.log(studentOne);

// var newStudent = new Cloze(result.answer); 
// 	// var studentOne = new Basic(result.question, result.answer);
// });
// }

// cflashcard();