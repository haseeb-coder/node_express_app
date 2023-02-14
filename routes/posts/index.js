const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.cookies);

  res.send('This is  homepage of  all post request!');

});


router.get('/postreq', (req, res) => {

  console.log(req.cookies);

    res.send('This is  post req!');

});



module.exports = router;