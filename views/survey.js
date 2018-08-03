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
       
        var arrayOfNumbers = scoreArr.map(Number);
        
        SurveyRes = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: arrayOfNumbers
        }


        // determine best match
        // $.get("/api/friends", function (req, res) {
        //     console.log(req);
        //     var friends = req
        //     var currScore;
        //     var bestScore = 99
        //     var bestFriend = "";
        //     for (var i = 0; i < friends.length; i++) {
        //         var currentcheckArr = friends[i].scores
        //             for (var s = 0; i < currentcheckArr.length; s++) {
        //                currScore = currScore + Math.abs(parseInt(scoreArr[s]) - parseInt(currentcheckArr[i])) 
        //                console.log("curr Score" + currScore)
        //             }
        //         if (currScore < bestScore) {
        //             bestScore = currScore;
        //             bestFriend = friends[i];
        //             console.log("Best match" + bestFriend)
        //             console.log("Best score" + bestScore)
        //         }
        //     }
        // })










        $.post("/api/friends", SurveyRes,
            function (data) {
                if (data) {
                    console.log("sent");
                } else {}
            });
    });

});
