// survey.js
var questions = getQuestions();
var choices = getChoices();

function getQuestions() {
    $.get("/api/questions", function (data) {
        console.log(data)
        questions = data
        return questions
    })
}


function getChoices() {
    $.get("/api/choices", function (data) {
        console.log(data)
        choices = data
        return choices;
    })
}


console.log(questions);
console.log(choices);