/**
 * Item.js
 *
 * @description :: Lost and Found Item
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    _id: {
      type: 'string'
    },
    createdAt: {
      type: 'datetime'
    },
    updatedAt: {
      type: 'datetime'
    },
    // ^^ Mongo generated ^^
    item: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      defaultsTo: function() {
        return null;
      }
    },
    comments: {
      type: 'text',
      defaultsTo: function() {
        return null;
      }
    },
    createdBy: {
      type: 'json'
    },
    returned: {
      type: 'boolean',
      defaultsTo: function() {
        return false;
      }
    },
    returnedSigner: {
      type: 'json'
    },
    returnedTo:{
      type: 'string',
      defaultsTo: function() {
        return "";
      }
    }
  }
};
