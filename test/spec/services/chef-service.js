'use strict';

describe('Service: chefService', function () {

  // load the service's module
  beforeEach(module('wecookApp'));

  // instantiate service
  var chefService;
  beforeEach(inject(function (_chefService_) {
    chefService = _chefService_;
  }));

  it('should do something', function () {
    expect(!!chefService).toBe(true);
  });

});
