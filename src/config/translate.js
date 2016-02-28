bonusesApp.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.translations('en', {
    'HOME_LINK': 'Main',
    'RATES_LINK': 'Rates',
    'PAYMENT_LINK': 'Payment',
    'CONTACT_LINK': 'Contact',
    'HOME_TITLE': 'MAIN',
    'NUMBER_PHONE': 'Number phone',
    'COUNT_BOUNCE': 'Count bounce',
    'COUNT_ROUBLES': 'Price',
    'COUNT_BOUNCES': 'Count bounces',
    'PRICE_BOUNCES': 'Price for once bonus'
  });

  $translateProvider.translations('ru', {
    'HOME_LINK': 'Главная',
    'RATES_LINK': 'Тарифы',
    'PAYMENT_LINK': 'Оплата',
    'CONTACT_LINK': 'Контакты',
    'HOME_TITLE': 'Главная',
    'NUMBER_PHONE': 'Номер телефона',
    'COUNT_BOUNCE': 'Количество бонусов',
    'COUNT_ROUBLES': 'Стоимость',
    'COUNT_BOUNCES': 'Количество бонусов',
    'PRICE_BOUNCES': 'Цена за один бонус'
  });

  $translateProvider.preferredLanguage('en');
  $translateProvider.useStorage('translateStorage');
}]);