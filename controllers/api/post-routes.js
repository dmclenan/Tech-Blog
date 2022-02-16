const router = require('express').Router();
//Require the correct files from the models and authorizations

router.post('/', withAuth, async (req, res) => {
//Complete the asychronous function with error handling
});

router.put('/:id', withAuth, async (req, res) => {
//Complete the asychronous function with error handling
});

router.delete('/:id', withAuth, async (req, res) => {
  //Complete the asychronous function with error handling
});

module.exports = router;
