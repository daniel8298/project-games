import { SerializedError, createSlice } from "@reduxjs/toolkit";
import GameInterface from "../games/interfaces/GameInterface";
import getGamesByUserId from "./services/getGamesByUserId";
import getGamesByUserSwapId from "./services/getGamesByUserSwapId";

interface InitialState {
  pending: boolean;
  error: string | SerializedError;
  gamesFromUser: GameInterface[];
  gamesFromUserSwap: GameInterface[];
}

const initialState: InitialState = {
  pending: false,
  error: "",
  gamesFromUser: [],
  gamesFromUserSwap: [],
};

export const exchangeGamesSlice = createSlice({
  name: "gamesFromUser",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGamesByUserId.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(getGamesByUserId.fulfilled, (state, action) => {
      state.pending = false;
      state.gamesFromUser = action.payload;
      return state;
    });
    builder.addCase(getGamesByUserId.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
    builder.addCase(getGamesByUserSwapId.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(getGamesByUserSwapId.fulfilled, (state, action) => {
      state.pending = false;
      state.gamesFromUserSwap = action.payload;
      return state;
    });
    builder.addCase(getGamesByUserSwapId.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
  },
});
export default exchangeGamesSlice.reducer;
