import { configureStore } from "@reduxjs/toolkit";
import { favoritesSlice } from "./features/favorites/favoritesSlice";
import { localStorageMiddleware } from "./middleware/localStorageMiddleware";

export const makeStore = () => {
  return configureStore({
    reducer: {
      favorites: favoritesSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(localStorageMiddleware),
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
