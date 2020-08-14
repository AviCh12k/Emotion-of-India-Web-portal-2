var port = 5000;

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var twet = [];
var newtwet = "";
var xyz = "";
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

const Twit = require('twit')
const notifier = require('node-notifier');
const open = require('open');
const franc = require('franc')

const apikey = '396TwhBJkF3E6ny5JyEjvAjAm'
const apiSecretKey = 'uzB8hv5BycVtZjiRXnyznOSiFkqF6F2LTJH53Vh5PoJC9soYn6'
const accessToken = '2575237039-dICYl8XcCaTOl7JYcFExnhjiukUafoYNQ4GKJU7'
const accessTokenSecret = 'MEwrVXK8EvwhpZe3gU0CD3ex1uYV9FoqfMEuwGBg6QIfc'

var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

(async () => {

    //1. GET RECENT TWEETS
    T.get('search/tweets', { q: 'coronavirus since:2020-03-01', count: 100000 }, function(err, data, response) {
      const tweets = data.statuses
      // .map(tweet => `LANG:${franc(tweet.text)}:${tweet.text}`) //CHECK LANGUAGE
      .map(tweet => tweet.text)
      // .filter(tweet => tweet.toLowerCase().includes('elon'));
      console.log(tweets);
      console.log(typeof(tweets));
      for(var i =0;i<tweets.length;i++){
        // if (tweets[i].split(":")[1]=="eng"){
        //   twet = twet + "<li>" + tweets[i].split(":") + "</li>"
        // }
        if(franc(tweets[i])=="eng"){
          newtwet += "<li>" + tweets[i] + "</li>"
        }
      }
    })

    // //2. REAL TIME MONITORING USING STREAM (HASHTAG)
    var india = [ '68.7', '8.4', '97.25', '37.6' ]
    var stream = T.stream('statuses/filter', { track: "coronavirus", locations: india})
    stream.on('tweet', function (tweet) {
        console.log(tweet.text);
        twet.push(tweet.text);
        // console.log(twet);
        xyz = "";
        var i = 0;
        for( i = 0; i<twet.length;i++){
          if(franc(twet[i])=="eng"){
            xyz += "<li>" + twet[i] + "</li>"
          }
        };
        console.log('Language: ' + franc(tweet.text));
        console.log('------');
    })

    // 3. REAL TIME MONITORING USING STREAM (LOCATION)
    // var sanFrancisco = [ '68.7', '8.4', '97.25', '37.6' ]
    // var stream = T.stream('statuses/filter', { locations: sanFrancisco })
    
    // //SHOW NOTIFICATION FOR EACH RECEIVED TWEET
    // stream.on('tweet', function (tweet) {
    //   console.log(tweet.text);
    //   let url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`

    //   notifier.notify({
    //     title: tweet.user.name,
    //     message: tweet.text
    //   });

    //   notifier.on('click', async function(notifierObject, options, event) {
    //     console.log('clicked');
    //     await open(url);
    //   });
    // })
})();

app.get("/", function(req,res){
    res.render("index.ejs",{demo_24:newtwet, demo:xyz});
    twet = [];
    xyz = ""
});

app.listen(port,function(){
    console.log("Server Started");
});