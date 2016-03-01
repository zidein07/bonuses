bonusesApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/bonuses/src/partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/rates', {
      templateUrl: '/bonuses/src/partials/rates/rates.html',
      controller: 'bonusesRatesCtrl'
    })
    .when('/payment', {
      templateUrl: '/bonuses/src/partials/payment/payment.html',
      controller: 'bonusesPaymentCtrl'
    })
    .when('/contact', {
      templateUrl: '/bonuses/src/partials/contact/contact.html',
      controller: 'bonusesContactCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);