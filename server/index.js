var express = require("express"),
    app = express();

app.use(function (request, response, next) {
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.get("/headhunters", function(request, response) {
    response.json({
    	data: [
			{ id: 0, name: 'Sandra', email: 'sandra@gmail.com', skype: 'sandra', linkedin: 'sandra'},
		  	{ id: 1, name: 'Sveta', email: 'Sveta@gmail.com', skype: 'Sveta', linkedin: 'Sveta'},
		  	{ id: 2, name: 'Ivan', email: 'Ivan@gmail.com', skype: 'Ivan', linkedin: 'Ivan'},
		  	{ id: 3, name: 'Olya', email: 'Olya@gmail.com', skype: 'Olya', linkedin: 'Olya'},
		  	{ id: 4, name: 'Masha', email: 'Masha@gmail.com', skype: 'Masha', linkedin: 'Masha'}
	]});
});

app.listen(3000);
