'use strict';

/**
 * @ngdoc service
 * @name sappApp.session
 * @restaurantManagerApp
 * # session
 * Service in the sappApp.
 */
angular.module('sappApp')
  .service('PouchService', function (pouchdb) {

    var dbLocal = new PouchDB('stoveDb');
    var api = {};

    api.query = function (view) {
      var data = [];
      return dbLocal.query(function(doc, emit) {
        if (doc.view === view) {
          emit(doc);
        }
      }).then(function (result) {
        _.map(result.rows, function (doc) {
          data.push(doc.key);
        });

        return data;
      }).catch(function (err) {
        console.log(err);
      });
    };

    api.createDoc = function (params) {
      var timeStamp = String(new Date().getTime());
      params._id = timeStamp;
      return dbLocal.put(params).then(function (response) {
        return response;
      }).catch(function (err) {
        console.log(err);
      });
    };

    api.getDoc = function (id) {
      return dbLocal.get(id).then(function (doc) {
        return doc;
      }).catch(function (err) {
        console.log(err);
      });
    };

    return api;
  });
