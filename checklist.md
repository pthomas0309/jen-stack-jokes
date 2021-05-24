Working checklist

[ ] Client Joke Input & display
    [ ] GET route takes jokes already hosted on the server
        [ ] use jQuery to append these items to the DOM
        [ ] update DOM every time a joke is added from POST
    [ ] POST route takes user info and brings it to the server
        [ ] add joke click listener 
        [x] eval user data from inputs and send on the push of the add joke button
        [ ] clear inputs upon sending

[x] Server joke storage 
    [x] GET route to send existing joke data from server to client
    [x] POST route takes user data from client and pushes it in to the array of joke objects

[ ] Other Stuff
    [ ] style
    [ ] keep server from intercepting bad data

Data Structure

    POST
    {
        whoseJoke: "Luke",
        jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
        punchLine: "Do you know how to drive this thing?"
    }

    GET
    [
        {
            whoseJoke: "Luke",
            jokeQuestion: "Two fish are in a tank. What did one fish say to the other?",
            punchLine: "Do you know how to drive this thing?"
        }
        ECT...
    ];