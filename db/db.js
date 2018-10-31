const mongoose= require('mongoose');


var db = mongoose.connect("mongodb://" + secrets.dbuser + ":" + secrets.dbpassword + "@ds217131.mlab.com:17131/heroku_cgp0vm8m", function(error){
    if(error) console.log(error);

        console.log("connection successful");
});

module.exports= db;