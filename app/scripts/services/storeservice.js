'use strict';

/**
 * @ngdoc service
 * @name xebiaApp.storeService
 * @description
 * # storeService
 * Service in the xebiaApp.
 */
angular.module('xebiaApp')
  .service('storeService', ['fruits', '$q', function (fruits, $q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var self = this,
      fruit = {};

    self.getDetails = function (fruitName) {
      var defer = $q.defer();
      angular.forEach(fruits, function (val, key) {
        if (val.name === fruitName) {
          fruit = val.name;
        }
      });
      if (Object.keys(fruit).length) {
        defer.resolve(fruit);
      } else {
        defer.reject();
      }
      return defer.promise;
    }
  }]);
