const express = require('express'); 
const mongoose = require('mongoose'); 
const app = express(); 
mongoose.connect('mongodb://localhost:27107/mernstack',
	{
		useNewUrlParser: true, 
		useFindAndModify: true, 
		useUnifiedTopology: true
	}, 
	(err) => {
		if (err) {
			console.log('unable to connect db');
		}
		else {
			console.log('connect db successfully');
		}
	}
); 
const port = process.env.PORT || 5000; 
app.listen(port, () => {
	console.log('app is running on port 5000');
}); 
												