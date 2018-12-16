// Require and request variables:
// fs is used to file save the results to a file

var fs = require("fs");

var request = require("request");

// Require and configure dotenv:

require("dotenv").config();

var keys = require("./keys.js");

// Spotify search:

var spotify = require(node-spotify-api);


var spotify = new Spotify(keys.spotify);

spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});

// NPM package request: 

var request = require('request');
request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});

// My OMDb key: ff202796

//Please append it to all of your API requests,

// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=ff202796


// Make this file have the ability to take in spotify-this-song

//each command should do one of these things:
// node liri.js concert-this <artist/band name here> and show the name of the venue, venue location and date of the event mm.dd.yyyy format.

// node liri.js spotify-this-song '<song name here>' and show the artist(s) and song's name, a preview link of the song from Spotify and the album that the song is from.
// 1. Need variable for entering the song name to be sent to Spotify.

var songName = "";

// 2. Store the variables in an array

var nodeArgs = process.argv;

// 3. Need variables for receiving back the artist(s) and song's name, link of the song from Spotify, and album name that the song is from.

var artist = request.data.artist;
var songsName = "";
var songUrl = "";
var album = "";

// 4. Run the request to Spotify.  Should this be a var queryUrl?

request("https://api.spotify.com/v1/songName/7yCPwWs66K8Ba5lFuU2bcx"), function (error, response, body) {

    // 5. Write the result to a log.txt file.

    if (!error && response.statusCode === 200) {
        fs.writeFile("log.txt",
            console.log("log.txt was updated!"));
    }
}





// node liri.js movie-this '<movie name here>' and show the title of the movie, year it came out, IMDB rating, rotton tomatoes rating, country where the movie was produced, language of the movie, plot, actors.

// node liri.js do-what-it-says using the fs node package, LIRI will take the text inside of a random.txt and use it to call one of LIRI's commands.  It should run spotify-this-song for "I want it that way" as follows in the text random.txt.

// log the data to an output file called log.txt and append each command vs. overwrite.

