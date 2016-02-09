'use strict';


angular.module('wecookApp')
  .service('Client', function() {

    var _user;
    var _orders = [];

    var _products;
    var _chefs;

    this.getUser = function() {
      return _user;
    };

    this.getProduct = function(id) {
      for (var i = 0; i < _products.length; i++) {
        var product = _products[i];
        if (product.id === id) {
          return product;
        }
      }

      return undefined;
    };

    this.getProducts = function() {
      return _products;
    };

    this.setProducts = function(products) {
      _products = products;
    };

    this.getOrders = function() {
      return _orders;
    };

    this.addOrder = function(product) {
      _orders.push(product);
    };

    this.removeOrder = function(product) {
      var index = _orders.indexOf(product);
      _orders.splice(index, 1);
    };

    this.setChefs = function(chefs) {
      _chefs = chefs;
    };

    this.getChefs = function() {
      return _chefs;
    };

  });
