'use strict';

describe('Service: guestService', function () {

  // load the service's module
  beforeEach(module('wecookApp'));

  // instantiate service
  var guestService;
  beforeEach(inject(function (_guestService_) {
    guestService = _guestService_;
  }));

  it('should do something', function () {
    expect(!!guestService).toBe(true);
  });

});
