import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "@/lib/utils/localStorage";

// Define a type for the slice state
export interface FavoritesState {
  value: {
    id: string;
    title: string;
    image: string;
  }[];
}

// Define the initial state using that type
const initialState: FavoritesState = {
  value: loadFromLocalStorage("favorites") || [],
} as FavoritesState;

export const favoritesSlice = createSlice({
  name: "favorites",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addToFavorites: (
      state,
      action: PayloadAction<FavoritesState["value"][0]>
    ) => {
      if (state.value.some((item) => item.id === action.payload.id)) {
        return;
      }
      state.value.push(action.payload);
      saveToLocalStorage("favorites", state.value);
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item) => item.id !== action.payload);
      saveToLocalStorage("favorites", state.value);
    },
    clearFavorites: (state) => {
      state.value = [];
      saveToLocalStorage("favorites", []);
    },
  },
});

export const { addToFavorites, removeFromFavorites, clearFavorites } =
  favoritesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.favorites.value;

export default favoritesSlice.reducer;
