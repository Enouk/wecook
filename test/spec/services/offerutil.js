'use strict';

describe('Service: offerutil', function () {

  // load the service's module
  beforeEach(module('wecookApp'));

  // instantiate service
  var offerutil;
  beforeEach(inject(function (_offerutil_) {
    offerutil = _offerutil_;
  }));

  it('should do something', function () {
    expect(!!offerutil).toBe(true);
  });

});
