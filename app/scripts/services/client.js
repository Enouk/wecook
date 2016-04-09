'use strict';

angular.module('wecookApp')
  .service('Client', function() {

    var _user;
    var _profile;
    var _chef;
    var _guest;
    var _sessionId;
    var _orders = [];
    var _cartOrders = [];

    var _products;
    var _offers;
    var _chefs;

    this.isLoggedIn = function() {
      if (_user !== undefined) {
        return true;
      }
      return false;
    };

    this.getUser = function() {
      return _user;
    };

    this.setUser = function(user) {
      _user = user;
    };

    this.getUserProfile = function() {
      return _profile;
    };

    this.setUserProfile = function(profile) {
      _profile = profile;
    };

    this.getUserChef = function() {
      return _chef;
    };

    this.setUserChef = function(chef) {
      _chef = chef;
    };

    this.isChefUser = function() {
      return _chef !== undefined;
    };

    this.getUserGuest = function() {
      return _guest;
    };

    this.isGuestUser = function() {
      return _guest !== undefined;
    };

    this.setUserGuest = function(guest) {
      _guest = guest;
    };

    this.getSessionId = function() {
      return _sessionId;
    };

    this.setSessionId = function(SessionId) {
      _sessionId = SessionId;
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

    this.getCartOrders = function() {
      return _cartOrders;
    };

    this.clearCartOrders = function() {
      _cartOrders.length = 0;
    };

    this.addCartOrder = function(offer) {
      _cartOrders.push(offer);
    };

    this.removeCartOrder = function(offer) {
      var index = _cartOrders.indexOf(offer);
      _cartOrders.splice(index, 1);
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
