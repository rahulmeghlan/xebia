'use strict';

describe('Service: storeService', function () {

  // load the service's module
  beforeEach(module('xebiaApp'));

  // instantiate service
  var storeService;
  beforeEach(inject(function (_storeService_) {
    storeService = _storeService_;
  }));

  it('should do something', function () {
    expect(!!storeService).toBe(true);
  });

});
