'use strict';

angular.module('wecookApp')
  .service('ProfileService', function ($http) {
    
    this.updateProfile = function(id, firstname, lastname) {

      var operations = [];

      if (firstname !== undefined) {
        operations.push(this.createPatchOp('firstname', firstname));
      }

      if (lastname !== undefined) {
        operations.push(this.createPatchOp('lastname', lastname));
      }

      var options = {
        headers: {
          'Content-Type': 'application/json-patch'
        }
      };

      return $http.put('/api/wecook/profile/' + id, operations, options);
    };

    // TODO move to util class
    this.createPatchOp = function(name, value) {
      var replace = {
        op: 'replace',
        path: name,
        value: value
      };

      return replace;
    };
  });
