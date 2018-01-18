var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/testmongo";

MongoClient.connect(
	url,
	function(err, client)
	{
		console.log("Connected to mongodb");
		
		const db = client.db("testgamedb");
		
		var myData = {game:"Overwatch", company:"Blizzard"};
		
		
		//insert one
		db.collection("games").insertOne(
			myData, 
			function(err, result)
			{
				if (err) throw err;
				console.log("Game entered in record");
			}
		);
		
		
		//find all
		db.collection("games").find({}).toArray(
			function(err, result)
			{
				if (err) throw err;
				console.log(result);
			}
		);
		
		
		// delete
		db.collection("games").deleteMany(
			function(err, delOK)
			{
				if (err) throw err;
				if (delOK) console.log("Games has been dropped");
			}
		);
		
		/*
		// drop
		db.collection("games").drop(
			function(err, delOK)
			{
				if (err) throw err;
				if (delOK) console.log("Games has been dropped");
			}
		);
		*/
		
		client.close();
	}
);