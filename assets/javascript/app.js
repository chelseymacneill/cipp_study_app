var card = $("#quiz-area");
var countStartNumber = 30; 


// I want some questions that are asking for a definition and then the user types in thier answer. 
// They then are shown the correct definition 
// Asked if they got it right (y/n) 
// It then moves to the next question 

// Other questions will just be T/F or pick A,B,C,D
// These questions the game can check the answer

// At the end show the score 


// Question set: Definition question sets
var questions = [{
    question: "Profiling as defined by GDPR means:",
    answers: [ "A: the automated analysis or predicting of behavior, location, movements, reliability, interests, personal preferences, health, economic situation, performance, etc."]
}];

// Question set: T/F Question sets


// Question set: A,B,C,D Questions



// Variable to hold our setInterval 
var timer

var game = { 
    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    //image: (may have this be a link to source about the answer)

}


countdown: function () {
    this.counter--;
    $("#counter-number").text(this.counter); 
    
}
