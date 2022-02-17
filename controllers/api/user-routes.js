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
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });
    if (!user) {
      res.status(400).json({ message: 'Not found!' });
      return;
    }
    const validPassword = user.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Not found' });
      return;
    }
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      res.json({ user, message: 'logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: ' User not found!' });
  }
});

router.post('/logout', (req, res) => {
  // Create the correct functionality for this post request with error handling
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
