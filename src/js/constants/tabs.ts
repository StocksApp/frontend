export default [
  {
    id: 'game',
    text: 'Rozgrywka',
    url: 'game',
    items: [
      { id: 'single', url: 'single', text: 'Jednoosobowa' },
      { id: 'history', url: 'history', text: 'Historia' },
    ],
  },
  {
    id: 'wallet',
    text: 'Portfel',
    url: 'wallet',
    items: [
      { id: 'summary', url: 'summary', text: 'Podsumowanie' },
      { id: 'history', url: 'history', text: 'Historia transakcji' },
    ],
  },
  {
    id: 'order',
    text: 'Zlecenie',
    url: 'order',
    items: [
      { id: 'current', url: 'current', text: 'Obecne zlecenia' },
      { id: 'history', url: 'history', text: 'Historia zleceń' },
    ],
  },
];
