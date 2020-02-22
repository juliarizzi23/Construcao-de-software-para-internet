var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/message', function(req, res, next){
    var messageVar = req.body.messageBody;
    res.redirect('/message/' + messageVar);
});

router.get('/message/:msgParam', function(req, res, next){
    res.render('node', { message: req.param.msgParam });
});

module.exports = router;