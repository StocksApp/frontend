const ApiUrls = {
  stocks: {
    get: '/stocks',
    stocksForDay: (stock: string, date: string): string =>
      `/markings/${stock}/${date}`,
    tickersForDay: (stock: string, date: string): string =>
      `/tickers/${stock}/${date}`,
    tickerStocksRange: (
      stock: string,
      ticker: string,
      from: string,
      to: string
    ): string =>
      `/security_markings/${stock}/${ticker}?start=${from}&end=${to}`,
  },
  game: {
    create: '/game/create',
    wallet: (gameId: string | number): string => `/game/wallet/${gameId}`,
    createTransaction: '/game/transaction',
    nextTurn: '/game/nextTurn',
  },
  auth: {
    login: '/login',
    register: '/users/add',
  },
};

export default ApiUrls;
