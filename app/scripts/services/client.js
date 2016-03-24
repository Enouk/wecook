'use strict';

angular.module('wecookApp')
  .service('Client', function() {

    var _user;
    var _chef;
    var _guest;
    var _sessionId;
    var _orders = [];

    var _products;
    var _offers;
    var _chefs;

    this.getUser = function() {
      return _user;
    };

    this.setUser = function(user) {
      _user = user;
    };

    this.getSessionId = function() {
      return _sessionId;
    };

    this.setSessionId = function(SessionId) {
      _sessionId = SessionId;
    };

    this.getUserChef = function() {
      return _user.chef;
    };

    this.setUserChef = function(chef) {
      _user.chef = chef;
    };

    this.getUserGuest = function() {
      return _user.guest;
    };

    this.setUserGuest = function(guest) {
      _user.guest = guest;
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

    this.addProduct = function(product) {
      _products.push(product);
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

    this.addOrder = function(offer) {
      _orders.push(offer);
    };

    this.removeOrder = function(offer) {
      var index = _orders.indexOf(offer);
      _orders.splice(index, 1);
    };

    this.setChefs = function(chefs) {
      _chefs = chefs;
    };

    this.getChef = function(id) {
      for (var i = 0; i < _chefs.length; i++) {
        var chef = _chefs[i];
        if (chef.id === id) {
          return chef;
        }
      }

      return undefined;
    };

    this.getChefs = function() {
      return _chefs;
    };

    this.setOffers = function(offers) {
      _offers = offers;
    };

    this.getOffers = function() {
      return _offers;
    };

  });
