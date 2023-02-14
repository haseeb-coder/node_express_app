const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {

  res.send('This is  homepage of  all user!');

});


router.get('/:username', (req, res) => {

    res.render('profile', { username: req.params.username });
});



module.exports = router;