function room001Controller(Meetingroom) {
  console.log("Meetingroom " + Meetingroom.getUserData());
  debugger;
  var vm = this;
  vm.text = 'Manish';

  Meetingroom.getPokimonData().then(function(data){
    vm.userdata = data;
    console.log(vm.userdata);
    console.log(vm.userdata.name);
    console.log(vm.userdata.weight);
  }).catch(function(errorResponse) {
    console.log('oopsie', errorResponse);
  });
}

angular
  .module('app')
  .component('room001', {
    templateUrl: 'app/components/meetingRoom/room001.html',
    controller: room001Controller
  });

