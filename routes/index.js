var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function (request, response, next) {
  console.log(request.body)

  const user_email = request.body.user_email_address;
  const user_password = request.body.user_password;

  console.log(user_email)
  console.log(user_password)

  response.send('You are now logged in.')
})

module.exports = router;
