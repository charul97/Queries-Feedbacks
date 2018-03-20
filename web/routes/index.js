var express = require('express');
var router = express.Router();
var session = require('express-session');
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { nMsg: '' });
});


router.get('/speech', function(req, res){
	//speech to text
});


router.post('/contactInput', function(req, res){

	fs.readFile(path.join(__dirname,'../public/data/data.json'), 'utf8', function(err, data){
		for(var i=0; i<(JSON.parse(data)).length; i++){
			console.log(req.body.contactNum+'---'+(JSON.parse(data))[i].mobile);
			if(req.body.contactNum == (JSON.parse(data))[i].mobile)
				break;
		}
		if(i == (JSON.parse(data)).length){
			session.mob = req.body.contactNum;
			session.genOTP = Math.floor(100000 + Math.random() * 900000);
			res.render('enterotp', {otp: session.genOTP});					
		}
		else{
			res.render('index', {nMsg: 'Your feedback is already recorded.'});
		}
	});	
});

router.post('/verify', function(req, res){
	if(session.genOTP == req.body.userOTP){
		session.genOTP = "";
		res.render('feedback', {mob: session.mob});
	}else{
		session.genOTP = "";
		session.mob = "";
		res.render('index', {nMsg: 'Incorrect OTP'});
	}
});

router.post('/submitFeed', function(req, res){
	var save = '{"mobile": '+session.mob+', "dept": "'+req.body.dept+'", "feedback": "'+req.body.inpFeedback+'", "query": "'+req.body.inpQuery+'"}';
	//console.log(save);

	fs.readFile(path.join(__dirname,'../public/data/data.json'), 'utf8', function(err, data){
		console.log(data);
		if(data == ""){
			var save1 = '['+save+']';
			var createStream = fs.createWriteStream(path.join(__dirname,'../public/data/data.json'));
			createStream.end();
			fs.writeFile(path.join(__dirname,'../public/data/data.json'), save1, 'utf8', function(err){
				if(err)
					console.log('not written');
				else{
					console.log('written');
					res.render('success');
				}
			});			
		}
		else{

			var some3 = JSON.parse(data);
			some3.push(JSON.parse(save));
			console.log(some3);
			fs.writeFile(path.join(__dirname,'../public/data/data.json'), JSON.stringify(some3), 'utf8', function(err){
				if(err)
					console.log('not written');
				else{
					console.log('written');
					res.render('success');
				}
			});
		}
	});
});




module.exports = router;