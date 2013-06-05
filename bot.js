// Our Twitter library
var Twit = require('twit');
// A library that lets us grab data from the web via HTTP
var request = require('request');
// Nouns!
var nouns = require('./nouns.js');
// A library that lets us pluralize
var inflection = require('inflection');
// Putting the pluralize function on its own variable so our code is cleaner
var pluralize = inflection.pluralize;

// We need to include our configuration file
var T = new Twit(require('./config.js'));

// Helper function on arrays, picks a random thing
Array.prototype.pick = function() {
  return this[Math.floor(Math.random()*this.length)];
}

// This function finds the latest tweet with the #mediaarts hashtag, and retweets it.
function tweet() {
    console.log(stuff());
}

function stuff() {
  var result = "";

  var pre = [
    "We'd like you to write books about " + pluralize(nouns.pick().word) + "."
  ];

  result = pre.pick();

  return result;
}

// Try to retweet something as soon as we run the program...
tweet();
// ...and then every hour after that. Time here is in milliseconds, so
// 1000 ms = 1 second, 1 sec * 60 = 1 min, 1 min * 60 = 1 hour --> 1000 * 60 * 60
setInterval(tweet, 1000 * 60 * 60);
