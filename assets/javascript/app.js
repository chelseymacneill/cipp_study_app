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
    answers: [ "The correct definition is: Profiling is the automated analysis or predicting of behavior, location, movements, reliability, interests, personal preferences, health, economic situation, performance, etc."]
}];

// Question set: T/F Question sets

var questions2 = [{
    question: "True or False, Anonymous information is protected under GDPR just as striclty and Personal Information.",
    answers: "F. Anonymous information is not protected by the GDPR"

    question: "True or False. COPPA only applies to operators of commercial websites and online services that are directed to children under the age of 13.", 
    answer: "F. COPPA also applies to general audience websites that have actual knowledge that they are collecting personal information from children under the age of 13"
}]

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
