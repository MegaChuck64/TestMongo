// connect to the db

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,
	function(err, db)
	{
		if (err) throw err
		
		console.log("Connected!");
	}
);