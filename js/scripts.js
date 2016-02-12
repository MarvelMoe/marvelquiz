
var superQuestions = [
	{	question: "Is Professor X a bald and beautiful man?",
		answer: "YES"
	},
	{	question: "How tall is The Hulk; in feet?",
		answer: 7
	},
	{
		question:"How many tons can Colossus lift?",
		answer: 75 
	},
	{	question:"S.H.I.E.L.D.'s highest ranking agent is?",
		answer: "NICK FURY"
	},
	{	question:"What is the metal that lines the skeleton in Wolverines body?",
		answer: "ADAMANTIUM"
	},
	{
		question:"Who is the woman that can make a person explode with her mind?",
		answer: "JEAN GRAY" 
	}

]
for (var i = 0; i < superQuestions.length; i++) {
	q = superQuestions[i].question
	document.getElementById("question" + [i]).textContent = q
};

function getInfo () {
	var correct = 0
	var incorrect = 0
	for(var i = 0; i < superQuestions.length; i++) {
		var realAnswer = superQuestions[i].answer
		var userAnswer = document.getElementById("answer" + [i]).value.toUpperCase()
		var questionResults = document.getElementById("question" + [i])
	 if (userAnswer == realAnswer) {
	 	questionResults.className = "correct" 
	 	correct++
	 } else {
	 	questionResults.className = "incorrect"
	 	incorrect++
	 }
	 }
	 document.getElementById("correct").textContent = "You got " + correct + " right"
	 document.getElementById("incorrect").textContent = "and " + incorrect + " incorrect"
	 if (correct == 6) {
	 	youWin()
	 }

	 function youWin() { 
	 		var newAudio = document.createElement('audio')
	 		newAudio.setAttribute("src","perfect.mp3")
	 		newAudio.autoplay = true;
	}
	
}