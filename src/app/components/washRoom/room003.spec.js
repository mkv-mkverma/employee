describe('room003 component', function () {
  beforeEach(module('app', function ($provide) {
    $provide.factory('room003', function () {
      return {
        templateUrl: 'app/room003.html'
      };
    });
  }));

  it('should...', angular.mock.inject(function ($rootScope, $compile) {
    var element = $compile('<room003></room003>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  }));
});
