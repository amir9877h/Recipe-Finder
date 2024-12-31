// lib/middleware/localStorageMiddleware.ts
import { Middleware } from '@reduxjs/toolkit';
import { saveToLocalStorage } from '../utils/localStorage';

export const localStorageMiddleware: Middleware = store => next => action => {
  const result = next(action);
  
  if (action.type?.startsWith('favorites/')) {
    saveToLocalStorage('favorites', store.getState().favorites.value);
  }
  
  return result;
};
