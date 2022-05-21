var card = $("#quiz-area");
var countStartNumber = 30; 

// Question set 
var questions = [{
    question: "Profiling as defined by GDPR means:",
    answers: [ "A: the automated analysis or predicting of behavior, location, movements, reliability, interests, personal preferences, health, economic situation, performance, etc."]
}];


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
