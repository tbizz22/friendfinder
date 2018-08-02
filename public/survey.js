// survey.js
var questions = [];
var choices = [];

getQuestions();



function getQuestions() {
    $.get("/api/questions", function (data) {
        questions = data
        getChoices()

    })
}

function getChoices() { 
    $.get("/api/choices", function (data) {
       choices = data
       drawPage()        
    })
}


function drawPage() {

}