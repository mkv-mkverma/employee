function room002Controller() {
  this.text = 'Another component';
}

angular
  .module('app')
  .component('room002', {
    templateUrl: 'app/components/developmentRoom/room002.html',
    controller: room002Controller
  });

