const contacts = require('../lib/data').all;

function getAll(callback) {
  callback(null, contacts);
}

function getOne(id, callback) {
  let contact = findSingleContact(id);
  if (contact.error) {
    callback(contact);
  } else {
    callback(null, contact);
  }
}

function findSingleContact(id) {
  if (contacts[id]) {
    return contacts[id];
  } else {
    return {
      error: 'Id not found.'
    };
  }
}

module.exports = {
  getAll,
  getOne
};
