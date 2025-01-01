// lib/middleware/localStorageMiddleware.ts
import { Middleware } from "@reduxjs/toolkit";
import { saveToLocalStorage } from "../utils/localStorage";
import { Favorite } from "@/app/favorites/page";

interface ReduxAction {
  type: string;
  payload?: Favorite;
}

export const localStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    const result = next(action);

    if ((action as ReduxAction).type?.startsWith("favorites/")) {
      saveToLocalStorage("favorites", store.getState().favorites.value);
    }

    return result;
  };
