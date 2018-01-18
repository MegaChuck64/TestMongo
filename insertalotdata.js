//insert multiple items into db via the myDataObj array

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,
	function(err, db)
	{
		if (err) throw err
		
		var dbObj = db.db("mydb");
		var myDataObj = 
		[
			{_id: "g0", game: "Doki Doki Lit Club", genre: "Horror"},
			{_id: "g1", game: "Train Simulator 2018", genre: "Simulation"},
			{_id: "g2", game: "Rocket League", genre: "Sports"},
			{_id: "g3",game: "Overwatch", genre: "FPS"},
			{_id: "g4",game: "Palladins", genre: "Not Overwatch"}
		];
		
		dbObj.collection("games").insertMany(myDataObj, 
			function(err, res)
			{
				if (err) throw err;
				console.log("Number of Games Inserted " + res.insertedCount);
				db.close();
			}
		);
	}
);