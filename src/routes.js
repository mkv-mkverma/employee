angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  var appState = {
    name: 'home',
    url: '/',
    component: 'app'
  },
  room001State = {
    name: 'room001',
    url: '/room001',
    component: 'room001'
  };
  $stateProvider
    .state(appState)
    .state(room001State);

  // $stateProvider
  //   .state('app', {
  //     url: '/',
  //     component: 'app'
  //   });
}
