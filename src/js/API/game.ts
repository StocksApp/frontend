import axios from 'axios';
import dayjs from 'dayjs';

import ApiUrls from './urls';
import { authHeader } from './auth';
import { Wallet } from '../models/interfaces';

export const createGame = async ({
  from,
  to,
  wallet,
  duration,
  markets,
}: {
  from: Date;
  to: Date;
  wallet: number;
  duration: number;
  markets: string;
}): Promise<void> => {
  try {
    const userId = localStorage.getItem('userId');
    if (!userId) return;
    const response = await axios.post<
      {
        userId: number;
        from: string;
        to: string;
        initialAmount: number;
        turnDuration: number;
        stock: string;
      },
      { data: { gameId: number } }
    >(
      ApiUrls.game.create,
      {
        userId: parseInt(userId),
        from: dayjs(from).format('YYYYMMDD'),
        to: dayjs(to).format('YYYYMMDD'),
        initialAmount: wallet,
        turnDuration: duration,
        stock: markets,
      },
      { headers: authHeader() }
    );
    localStorage.setItem('gameId', `${response.data.gameId}`);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const getWallet = async (): Promise<Wallet | undefined> => {
  try {
    const gameId = localStorage.getItem('gameId');
    if (!gameId) return;
    const response = await axios.get<Wallet>(ApiUrls.game.wallet(gameId), {
      headers: authHeader(),
    });
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const createTransaction = async (data: {
  ticker: string;
  stock: string;
  quantity: number;
  isOrderToSell: boolean;
  dueDate: string;
  actualDate: string;
}): Promise<void> => {
  try {
    const gameId = localStorage.getItem('gameId');
    if (!gameId) return;
    const response = await axios.post(
      ApiUrls.game.createTransaction,
      { ...data, gameId: parseInt(gameId), anyPrice: true },
      {
        headers: authHeader(),
      }
    );
    console.log(response);
  } catch (e) {
    console.log(e);
    throw e;
  }
};

export const nextTurn = async (): Promise<void> => {
  try {
    const gameId = localStorage.getItem('gameId');
    if (!gameId) return;
    console.log(ApiUrls.game.nextTurn);
    const response = await axios.post(
      ApiUrls.game.nextTurn,
      { gameId: parseInt(gameId) },
      {
        headers: authHeader(),
      }
    );
    console.log(response);
  } catch (e) {
    console.log(e);
    throw e;
  }
};
