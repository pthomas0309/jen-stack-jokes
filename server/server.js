const express = require( 'express' );
const app = express();
const bodyParser = require( 'body-parser' );
const PORT = 5000;

// use bodyParser.urlencoded throughout the app with this:
app.use(bodyParser.urlencoded({ extended: true }));

let jokes = [
  {
    whoseJoke: "Danny",
    jokeQuestion: "Why do scuba divers fall backwards out of boats?",
    punchLine: "If they fell forwards they’d still be in the boat!"
  },
  {
    whoseJoke: "Luke",
    jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
    punchLine: "Do you know how to drive this thing?"
  },
  {
    whoseJoke: "Millie",
    jokeQuestion: "What do you call a pile of cats?",
    punchLine: "A meowntain!"
  },
  {
    whoseJoke: "dEv",
    jokeQuestion: "Why should you not play cards in the forest?",
    punchLine: "Too many Cheetahs!"
  },
  {
    whoseJoke: "Scott",
    jokeQuestion: "I went to the zoo the other day, it had one dog...",
    punchLine: "It was a shih tzu."
  }
];

// serve back static files
app.use(express.static('server/public'));

// POST
//     {
//         whoseJoke: "Luke",
//         jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
//         punchLine: "Do you know how to drive this thing?"
//     }
//POST route takes user data to add to jokes array
app.post('/jokes', (req, res) => {
  //check request
  console.log(req.body);
  //variables for new joke obj.
  let whoseJoke = req.body.whoseJoke;
  let jokeQuestion = req.body.jokeQuestion;
  let punchline = req.body.punchline;
  //push req obj. into jokes array 
  jokes.push({
    whoseJoke: whoseJoke,
    jokeQuestion: jokeQuestion,
    punchline: punchline
  });
  //check the array
  console.log(jokes);
  //send good response
  res.sendStatus(201);
})

//GET route sends our stored jokes to client
app.get('/jokes', (req, res) => {
  //log we made it to the server
  console.log('reached /jokes');
  //respond with array of jokes
  res.send(jokes)
}); // end GET /jokes

app.listen(PORT, () => {
  console.log('server running on: ', PORT);
}); // end spin up server
