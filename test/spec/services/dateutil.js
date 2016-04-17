'use strict';

describe('Service: dateutil', function () {

  // load the service's module
  beforeEach(module('wecookApp'));

  // instantiate service
  var dateutil;
  beforeEach(inject(function (_dateutil_) {
    dateutil = _dateutil_;
  }));

  it('should do something', function () {
    expect(!!dateutil).toBe(true);
  });

});
