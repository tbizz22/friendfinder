//survey.js


$(document).ready(function () {

    M.AutoInit();
    $('.modal').modal();


    $("#submit").on("click", function (event) {
        //    validation


        if ($("#name").val() == "") {
            alert("Please enter a name");

        } else if ($("#photo").val() == "") {
            alert("Please provide a photo");

        } else if (!$("input[name='group1']:checked").val()) {
            var q = 1
            alert('Please answer question ' + q + ".");

        } else if (!$("input[name='group2']:checked").val()) {
            var q = 2
            alert('Please answer question ' + q + ".");

        } else if (!$("input[name='group3']:checked").val()) {
            var q = 3
            alert('Please answer question ' + q + ".");

        } else if (!$("input[name='group4']:checked").val()) {
            var q = 4
            alert('Please answer question ' + q + ".");

        } else if (!$("input[name='group5']:checked").val()) {
            var q = 5
            alert('Please answer question ' + q + ".");

        } else if (!$("input[name='group6']:checked").val()) {
            var q = 6
            alert('Please answer question ' + q + ".");

        } else if (!$("input[name='group7']:checked").val()) {
            var q = 7
            alert('Please answer question ' + q + ".");

        } else if (!$("input[name='group8']:checked").val()) {
            var q = 8
            alert('Please answer question ' + q + ".");

        } else if (!$("input[name='group9']:checked").val()) {
            var q = 9
            alert('Please answer question ' + q + ".");

        } else if (!$("input[name='group10']:checked").val()) {
            var q = 10
            alert('Please answer question ' + q + ".");
        }

        // if validation passes
        else {

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
                        bestFriendFull = friendsArr[i];
                        console.log("Best match: " + bestFriend)
                        console.log("Best score: " + bestScore)
                        showResults(bestFriendFull)
                    }
                }
            })

        }
    });

});


function showResults(bestFriendFull) {
    console.log(bestFriendFull);
    console.log(bestFriendFull.name);
    $("#matchname").html(bestFriendFull.name);
    $("#pic").attr("src", bestFriendFull.photo);
    var instance = M.Modal.getInstance(document.getElementById("modal1"));
    instance.open();

}