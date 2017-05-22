/**
 * LostFoundItemController
 *
 * @description ::
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
'use strict';

const ProfileService = require('../services/ProfileService.js');

var util = require('util');
var responseFormatter = require('../../helpers/format-response.js');
var lostAndFound = require('../services/LostAndFound.js');

module.exports = {

  getItems: getItems,
  getItemByID: getItemByID,
  createItem: createItem,
  updateItem: updateItem,
  deleteItem: deleteItem,
  returnItem: returnItem

};

function getItems(req, res) {
  ProfileService.checkAuthHeader(req, res, function () {
    //Then
    lostAndFound.getAll(function (response) {
      res.status(response.status).json(response);
    });
  });
}

function getItemByID(req, res) {
  var id = req.swagger.params.id.value || "";

  ProfileService.checkAuthHeader(req, res, function () {
    //Then
    lostAndFound.getByID(id, function (response) {
      res.status(response.status).json(response);
    });
  });

}

function createItem(req, res) {
  ProfileService.checkAuthHeader(req, res, function () {
    //Then
    lostAndFound.createItem(req, function (response) {
      res.status(response.status).json(response);
    });
  });
}

function updateItem(req, res) {
  var id = req.swagger.params.id.value || "";

  ProfileService.checkAuthHeader(req, res, function (response) {
    //Then
    lostAndFound.updateItem(id, req, function (response) {
      res.status(response.status).json(response);
    });
  });

}

function returnItem(req, res) {
  var id = req.swagger.params.id.value || "";
  var returnedTo = req.body.returnedTo;
  ProfileService.checkAuthHeader(req, res, function () {
    //Then
    lostAndFound.returnItem(id, returnedTo, function (response) {
      res.status(response.status).json(response);
    });
  });
}

function deleteItem(req, res) {

  var id = req.swagger.params.id.value || "";

  ProfileService.checkAuthHeader(req, res, function () {
    //Then
    lostAndFound.delete(id, function (response) {
      res.status(response.status).json(response);
    });
  });
}
