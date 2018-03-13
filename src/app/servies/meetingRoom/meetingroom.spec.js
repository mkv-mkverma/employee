describe('Meetingroom service', function () {
  beforeEach(module('app'));
  it('should', angular.mock.inject(function (Meetingroom) {
    expect(Meetingroom.getData()).toEqual(3);
  }));
});
