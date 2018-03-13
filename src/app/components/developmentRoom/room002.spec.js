describe('room002 component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('room002', function () {
      return {
        templateUrl: 'app/room002.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<room002></room002>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
