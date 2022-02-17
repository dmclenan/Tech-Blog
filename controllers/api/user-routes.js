const router = require('express').Router();
const { User } = require('../../models');
//Require the correct files from the models

router.post('/', async (req, res) => {
  // Create the correct asychronous function for this login post request with error handling
try {
  const newUser = await User.create({
    username: req.body.username,
    password: req.body.password
  });
  req.session.save(() => {
    req.session.userId = newUser.id;
    req.session.username = newUser.username;
    req.session.loggedIn = true;
    res.json(newUser);
});
} catch (err) {
  res.status(400).json(err);
}
});

router.post('/login', async (req, res) => {
  // Create the correct asychronous function for this login post request with error handling

});

router.post('/logout', (req, res) => {
  // Create the correct functionality for this post request with error handling

});

module.exports = router;
