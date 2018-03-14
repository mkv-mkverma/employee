function room001Controller(Meetingroom) {
  console.log("Meetingroom " + Meetingroom.getUserData());
  debugger;
  var vm = this;
  vm.text = 'Manish';

  Meetingroom.getPokimonData().then(function(data){
    vm.userdata = data;
    console.log(vm.userdata.data);
    console.log(vm.userdata.data.name);
    console.log(vm.userdata.data.weight);
  }).catch(function(errorResponse) {
    console.log('oopsie', errorResponse);
  });

  Meetingroom.getSpringRestData().then(function(response){
    vm.greeting = response.data;
    console.log(vm.greeting);
    console.log(vm.greeting.content);
    console.log(vm.greeting.id);
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

