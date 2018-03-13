function room003Controller() {
  this.text = 'My brand new component!';
}

angular
  .module('app')
  .component('room003', {
    templateUrl: 'app/components/washRoom/room003.html',
    controller: room003Controller
  });

