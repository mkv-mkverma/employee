function Meetingroom($http) {
  this.getUserData = function() {
    return "my Name";
    // return $http.get('userdata.json')
 }

  this.getPokimonData = function() {
    return $http.get('http://pokeapi.co/api/v2/pokemon/1/')
 }
}

// Meetingroom.prototype.getData = function () {
//   return 1 + 2;
// };

angular
  .module('app')
  .service('Meetingroom', Meetingroom);

