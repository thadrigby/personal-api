var express = require('express');
	app = express();
	bodyParser = require('body-parser');

// express middleware

app.use(bodyParser());


//cors middleware

app.all('*', function(req, res, next) {
	res.header('Access-Control_Allow-Origin', "127.0.0.1");
	res.header('Access-Control_Allow-Headers', req.header['Access-Control_Request-Headers']);
	next();
});


// get requests


app.get('/', function (req, res) {
	res.json("Welcome to my website");
});


app.get('/name', function (req, res) {
	res.json({name: 'Thadius O Rigby'});
});


app.get('/location', function (req, res) {
	res.json({location: 'UTAH'});
});



var hobbies = ['running', 'fishing', 'playing soccer']
app.get('/hobbies', function(req, res) {
	var hobbiesList = hobbies;
	var order = req.query.order;

	console.log("I am working")

	if (order==='asc') {
		hobbiesList.sort();
	} else if (order === 'desc') {
		hobbiesList.sort().reverse();
	}

	res.json(hobbiesList);
});



var occupation = ['educating', 'life-long learner'];

app.get('/occupation', function (req, res) {
	var occupationList = occupation;
	var order = req.query.order;

	if (order === 'asc') {
		occupationList.sort();
	} else if (order === 'desc') {
		occupationList.sort().reverse();
	}
	res.json(occupation);
});



app.get('/occupations/latest', function (req, res) {
	res.json(occupation[0]);
});



// mentions

var mentions = [];

app.get('/mentions', function (req, res) {
	res.json(mentions);
});

app.post('/mentions', function (req, res) {
	var newMention = {
		date: req.body.date,
		text: req.body.text,
		service: req.body.service
	};

	mentions.push(newMention);

	res.json(newMention);
})


// friends

var friends = [];

app.get('/friends', function (req, res) {
	res.json(friends);
})

app.post ('/friends', function (req, res) {
	var newFriends = req.body;

	friends.push(newFriends);

	res.json(newFriends);
})


//  skills

var skills = [
	{
		id: 1,
		name: 'Javascript',
		experience: 'Intermediate'
	},

	{
		id: 2,
		name: 'being RAD',
		experience: 'PRO'
	},

	{
		id: 3,
		name: 'whistling',
		experience: 'student'
	}

];

app.get('/skills', function (req, res) {
	res.json(skills);
});

app.get('/skills/:id', function (req, res) {
	var skillById =[];
	for (var i = 0; i<skills.length; i++) {
		if (skills[i].id == req.params.id) {
			skillById.push(skills[i]);
			
		}
	}
	res.json(skillById);
});

app.post('/skills', function (req, res) {
	var newSkill = req.body;

	skills.push(newSkill);

	res.json(newSkill);
})

app.put('/skills', function (req, res) {
	skills
})

app.listen(9800);