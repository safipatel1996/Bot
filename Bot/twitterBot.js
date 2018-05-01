var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'M4DG3l3hDAVxyWL9yb1Y1XxM6',
  consumer_secret: '2KlZHqloSt40r6Z5lgeGUA20XRgHDso2czliXVUDUT56M2N6AS',
  access_token_key: '2734643939-mfyfZXMO9rRrTRN4DMq02Mfap5AVrgS0OvEvBVy',
access_token_secret: 'UAesxAGb7z9bjVzGWbBkAYnTjQnSnaN99hcjuF0OPmOBi'
});

client.post('statuses/update', {status: 'Cov City'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.

});
client.get('favorites/list', {q: 'PUSB', results:10},
function(error, tweets, response) {
  console.log(tweets);  // The favorites.

});
var params = {screen_name: 'GaryLineker'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});
