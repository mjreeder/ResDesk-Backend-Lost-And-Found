var responseFormatter = require('../../helpers/format-response.js');
var currentAuthorizedUser = require('./currentUser.js');
var removeEmptyFields = function(item) {
  for (var property in item) {
    if (item.hasOwnProperty(property)) {
      if (item[property] == '' || typeof(item[property]) == "undefined" || item[property] == null) {
        delete item[property];
      }
    }
  }
  return item;
}

module.exports = {
  getAll: function(callback) {
    Item.find({'returned': false}).exec(function(err, result) {
      console.log(result);
      if (err) {
        return callback(responseFormatter.fail("Failed to find item", err, 500));
      } else {
        return callback(responseFormatter.success("All lost and found items.", result, 200));
      }
    });
  },

  getByID: function(id, callback) {
    Item.findOne({
      id: id
    }).exec(function(err, result) {
      if (err) {
        return callback(responseFormatter.fail("Failed to find item", err, 500));
      } else {
        return callback(responseFormatter.success("Lost and found item with id" + id + ".", result, 200));
      }
    });
  },

  createItem: function(req, callback) {
    var user = JSON.parse(currentAuthorizedUser.getCurrentAuthorizedUser()).data[0];

    var lostItem = {
      item: req.param('item'),
      email: req.param('email'),
      comments: req.param('comments'),
      createdBy: user
    };

    Item.create(lostItem).exec(function(err, result) {
      if (err) {
        return callback(responseFormatter.fail("Failed to create item", err, 500));
      } else {
        return callback(responseFormatter.success("Item creation success", result, 200));
      }
    });
  },

  returnItem: function(id, returnedTo, callback) {
    var updated = {
      returned: true,
      returnedSigner: JSON.parse(currentAuthorizedUser.getCurrentAuthorizedUser()).data[0],
      returnedTo: returnedTo
    }
    Item.update({
      id: id
    }, updated).exec(function afterwards(err, result) {

      if (err) {
        return callback(responseFormatter.fail("Failed to update item", err, 500));
      } else {
        return callback(responseFormatter.success("Item return success", result[0], 200));
      }
    });
  },

  updateItem: function(id, req, callback) {
    var updateItem = {
      item: req.param('item'),
      email: req.param('email'),
      comments: req.param('comments')
    };
    updateItem = removeEmptyFields(updateItem);

    Item.update({
      id: id
    }, updateItem).exec(function afterwards(err, result) {

      if (err) {
        return callback(responseFormatter.fail("Failed to update item", err, 500));
      } else {
        return callback(responseFormatter.success("Update item success", result[0], 200));
      }
    });
  },

  delete: function(id, callback) {
    Item.destroy({
      id: id
    }).exec(function(err, result) {
      if (err) {
        return callback(responseFormatter.fail("Failed to update item", err, 500));
      } else {
        return callback(responseFormatter.success("Lost and found item deleted.", result[0], 200));
      }
    });
  }

}
