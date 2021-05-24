console.log('client.js sourced');

$(document).ready(onReady);

function onReady() {
    console.log('DOM ready');
    //handle button click event
    $('#addJokeButton').on('click', createNewJoke)
    //append existing jokes to the DOM
    getJokes();
}

//will create new joke object to be sent to server
function createNewJoke() {
    console.log('clicked addJoke');
    //Grab info from inputs
    let whoseJoke = $('#whoseJokeIn').val();
    let jokeQuestion = $('#questionIn').val();
    let punchLine = $('#punchlineIn').val();
    console.log(whoseJoke, jokeQuestion, punchLine);
    //clear inputs
    $('#whoseJokeIn').val('');
    $('#questionIn').val('');
    $('#punchlineIn').val('');
    //create object containing user input
    let newJoke = {
        whoseJoke: whoseJoke,
        jokeQuestion: jokeQuestion,
        punchLine: punchLine
    }
    //call ajax to POST jokes to server
    $.ajax({
        method: 'POST',
        url: '/jokes',
        data: newJoke
    }).then(response => {
        //check for the ok from server
        console.log(response);
    });
    //run function to get our fresh jokes array for appending
    getJokes();
}

// POST
//     {
//         whoseJoke: "Luke",
//         jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
//         punchLine: "Do you know how to drive this thing?"
//     }

function getJokes(){
    $.ajax({
        method: 'GET',
        url: '/jokes'
    }).then(response => {
        //check to see the post made it in
        console.log(response);
        //clear the DOM for append
        $('#outputDiv').empty();
        //loop through response and append each joke
        for (let joke of response){
            $('#outputDiv').append(`<p>${joke.whoseJoke}'s joke: ${joke.jokeQuestion} ${joke.punchLine}</p>`)
        }
    });
}
// GET
// [
//     {
//         whoseJoke: "Luke",
//         jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
//         punchLine: "Do you know how to drive this thing?"
//     }
//     ECT...
// ];