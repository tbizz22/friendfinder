var friends = [{
    "name": "Ahmed",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    "scores": [
        5,
        1,
        4,
        4,
        5,
        1,
        2,
        5,
        4,
        1
    ]
}]



var questions = [{
    questionID: 1,
    question: "Do you agree with this statement",
},
{
    questionID: 2,
    question: "Do you agree with this statement",
},
{
    questionID: 3,
    question: "Do you agree with this statement",
},
{
    questionID: 4,
    question: "Do you agree with this statement",
},
{
    questionID: 5,
    question: "Do you disagree with this statement",
},
{
    questionID: 6,
    question: "Do you agree with this statement",
}
]

var choices = [{
        value: 1,
        descriptor: "Strongly Disagree"
    },
    {
        value: 2,
        descriptor: "Disagree"
    },
    {
        value: 3,
        descriptor: "Neutral"
    }, 
    {
        value: 4,
        descriptor: "Agree"
    },
    {
        value: 5,
        descriptor: "Strongly Agree"
    },

]

module.exports = {
    friends: friends,
    questions: questions,
    choices: choices
};