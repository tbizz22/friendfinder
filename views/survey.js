//survey.js


$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();
        // get every radio button
        var cl = document.getElementsByClassName("with-gap");
        var scoreArr = [];

        // get only the ones that are clicked
        for (var i = 0; i < cl.length; i++) {
            if (cl[i].checked === true) {
                var val = cl[i].getAttribute("data-response")
                var int = parseInt(val);
                scoreArr.push(int);
            }
        }



        // friend object
        SurveyRes = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: scoreArr
        }


        $.post("/api/friends", SurveyRes,
            function (data) {
                if (data) {
                    console.log("sent");
                } else {}
            });


        // determine best match
        $.get("/api/friends", function (req, res) {
            var friendsArr = req;
            var bestScore = 99
            var bestFriend = "";

            // for each friend (-1 to ignore the just submitted user)
            for (var i = 0; i < friendsArr.length - 1; i++) {
                var currScore = 0;
                var currentCheckArr = friendsArr[i].scores

                // compare each answer
                for (var s = 0; s < currentCheckArr.length; s++) {
                    currScore = currScore + Math.abs(parseInt(scoreArr[s]) - parseInt(currentCheckArr[s]));
                }
                // validate total answers score for each friend
                if (currScore < bestScore) {
                    bestFriend = friendsArr[i].name;
                    bestScore = currScore;
                    console.log("Best match: " + bestFriend)
                    console.log("Best score: " + bestScore)
                }
            }
        })


    });

});
