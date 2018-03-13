describe('room001 component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('room001', function () {
      return {
        templateUrl: 'app/room001.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<room001></room001>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
