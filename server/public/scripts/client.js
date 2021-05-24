console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    //handle button click event
    $('#addJokeButton').on('click', createNewJoke)
}

//will create new joke object to be sent to server
function createNewJoke(){
    console.log('clicked addJoke');
    let whoseJoke = $('#whoseJokeIn').val();
    let jokeQuestion = $('#questionIn').val();
    let punchline = $('#punchlineIn').val();
    console.log(whoseJoke, jokeQuestion, punchline);
}

// POST
//     {
//         whoseJoke: "Luke",
//         jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
//         punchLine: "Do you know how to drive this thing?"
//     }
//call ajax to POST jokes to server
// $.ajax({
//     method: 'POST',
//     url: '/jokes',
//     data: joke
// })
