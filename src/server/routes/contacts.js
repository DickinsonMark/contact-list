const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');

router.get('/', function (req, res, next) {
  const renderObject = {};
  renderObject.title = 'Here are all your contacts!';
  contactsController.getAll((error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.contactList = results;
      res.render('contacts', renderObject);
    }
  });
});

router.get('/:id', (req, res, next) => {
  const renderObject = {};
  let searchID = req.params.id;
  renderObject.title = 'Here is ';
  contactsController.getOne(searchID, (error, results) => {
    if (error) return next(error);
    if (results) {
      renderObject.contactList = [];
      renderObject.contactList.push(results);
      res.render('contacts', renderObject);
    }
  });
});

module.exports = router;
