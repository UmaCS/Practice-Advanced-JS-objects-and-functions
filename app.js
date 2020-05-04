(function() {

	function Question(question, answers, correct) {
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

	Question.prototype.displayQuestions = function() {
		console.log(this.question);
		for (let i = 0; i < this.answers.length; i++) {
			console.log(i + ': ' + this.answers[i])
		}
	}

	Question.prototype.checkAnswer = function(ans, callback) {
		let sc;
		if (ans === this.correct) {
			score++;
			console.log(`Yaay that's right`)
			sc = callback(true);
		} else {
			console.log('Wrong answer, Try again!');
			sc = callback(false)
		}
		this.displayScore(sc)
	}

	Question.prototype.displayScore = function(score) {
		console.log(`Your current score is: ${score}`);
		console.log('---------------------------------------------');
	}

	const q1 = new Question('Is JS the coolest language?', ['Yes', 'No'], 0);
	const q2 = new Question('Who is your JS teacher?', ['John', 'Jonas', 'Colt'], 1);
	const q3 = new Question('Describe the coding!', ['Boring', 'Tedious', 'Fun'], 2);
	const questions = [q1, q2, q3];

	function score() {
		let sc = 0;
		return function(correct) {
			if (correct) {
				sc++;
			}
			return sc;
		}
	}

	let keepScore = score();


	function nextQuestion() {
		let n = ~~(Math.random() * questions.length);
		questions[n].displayQuestions();
		let inputAnsw = prompt(`Please select the answer or type 'exit' to exit!`);

		if (inputAnsw !== 'exit') {
			questions[n].checkAnswer(+inputAnsw, keepScore);
			nextQuestion();
		}
	}
	nextQuestion();

})();