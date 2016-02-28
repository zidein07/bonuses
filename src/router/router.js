bonusesApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/src/partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/rates', {
      templateUrl: '/src/partials/rates/rates.html',
      controller: 'bonusesRatesCtrl'
    })
    .when('/payment', {
      templateUrl: '/src/partials/payment/payment.html',
      controller: 'bonusesPaymentCtrl'
    })
    .when('/contact', {
      templateUrl: '/src/partials/contact/contact.html',
      controller: 'bonusesContactCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);