var redis = require('redis');
var client = redis.createClient();

//single value write & read
client.set("my_key", "Hellow World!");
client.get("my_key", function(err, reply) {
    console.log(reply);
});
