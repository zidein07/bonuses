bonusesApp.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'HOME_LINK': 'Main',
    'RATES_LINK': 'Rates',
    'PAYMENT_LINK': 'Payment',
    'CONTACT_LINK': 'Contact',
    'HOME_TITLE': 'MAIN'

  });

  $translateProvider.translations('ru', {
    'HOME_LINK': 'Главная',
    'RATES_LINK': 'Тарифы',
    'PAYMENT_LINK': 'Оплата',
    'CONTACT_LINK': 'Контакты',
    'HOME_TITLE': 'Главная'

  });

  $translateProvider.preferredLanguage('en');
  $translateProvider.useStorage('translateStorage');
}]);