'use strict';

describe('Controller: productsCtrl', function() {
  // load the controller's module
  beforeEach(module('coolstuffApp'));

  var productsCtrl;
  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    productsCtrl = $controller('productsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of tasks', function() {
    expect(scope.products.length).toBe(7);
  });
});
