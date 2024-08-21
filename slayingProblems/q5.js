var express = require("express");
var app = express();
app.get('/', function(req, res) {
    try {
        var json = '{"address":{"city":"Bangalore","country":"India"}}';
        var jsonparsed = JSON.parse(json);
        var address = jsonparsed.addess.city + ',' + jsonparsed.address.state + ',' + jsonparsed.address.country;
        res.send("complete address is->" + address);
    } catch (e) {
        console.log('Error:', e);
    }

});



var port = Number(process.env.PORT || 8090);
app.listen(port, function() {
    console.log("Listening on " + port);
});
