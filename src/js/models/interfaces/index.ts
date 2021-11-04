export type Credentials = {
  login: string;
  password: string;
};

export type DailyAsset = {
  name: string;
  open: number;
  close: number;
  high: number;
  low: number;
  vol: number;
};

export type Asset = {
  stock: string;
  ticker: string;
  quantity: number;
  actualPrice: number;
};

export type Wallet = {
  totalMoney: number;
  blockedMoney: number;
  securities: Asset[];
};
