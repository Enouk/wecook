'use strict';

describe('Service: offerService', function () {

  // load the service's module
  beforeEach(module('wecookApp'));

  // instantiate service
  var offerService;
  beforeEach(inject(function (_offerService_) {
    offerService = _offerService_;
  }));

  it('should do something', function () {
    expect(!!offerService).toBe(true);
  });

});
