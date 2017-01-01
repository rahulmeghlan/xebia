'use strict';

/**
 * @ngdoc service
 * @name xebiaApp.storeService
 * @description
 * # storeService
 * Service in the xebiaApp.
 */
angular.module('xebiaApp')
  .service('storeService', ['fruitDetail', '$q', function (fruitDetail, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this,
      fruit = {};

    self.getDetails = function (fruitName) {
      var defer = $q.defer();
      fruit = fruitDetail[fruitName];

      if (Object.keys(fruit).length) {
        defer.resolve({name: fruitName, detail: fruit});
      } else {
        defer.reject();
      }
      return defer.promise;
    };
  }]);
