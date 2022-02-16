const router = require('express').Router();
//Require the correct files from the models and authorizations

router.get('/', withAuth, async (req, res) => {
  //Create the correct asychronous get route for this function
});

router.get('/new', withAuth, (req, res) => {
  // Create the correct get route
});

router.get('/edit/:id', withAuth, async (req, res) => {
  // Create the correct get route functionality using an asychronous function
});

module.exports = router;
