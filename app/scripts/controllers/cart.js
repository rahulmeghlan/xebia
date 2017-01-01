'use strict';

/**
 * @ngdoc function
 * @name xebiaApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the xebiaApp
 */
angular.module('xebiaApp')
  .controller('CartCtrl', ['cartService', '$scope', function (cartService, $scope) {
    var self = this;

    function initScopeItems() {
      self.items = cartService.cart;
      self.totalItems = cartService.totalQty;
      self.totalPrice = cartService.totalPrice;
      self.incrementQty = cartService.incrementQty;
      self.decrementQty = cartService.decrementQty;
      self.removeItem = cartService.removeItem;
    }

    function bindEvents() {
      $scope.$watch(function () {
        return cartService.totalPrice;
      }, function (nVal, oVal) {
          self.items = cartService.cart;
          self.totalItems = cartService.totalQty;
          self.totalPrice = cartService.totalPrice;
      });
    }

    function init() {
      initScopeItems();
      bindEvents();
    }

    init();

  }]);
