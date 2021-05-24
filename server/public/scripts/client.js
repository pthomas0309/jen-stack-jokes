console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', createNewJoke)
}

function createNewJoke(){
    console.log('clicked addJoke');
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
