import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import getGame from "./services/getGame";
import GameInterface from "./interfaces/GameInterface";
import getAllGames from "./services/getAllGames";
// import getGamesByUserId from "./services/getGamesByUserId";

interface InitialState {
  pending: boolean;
  error: string | SerializedError;
  games: GameInterface[];
  game: GameInterface | null;
  platforms: GameInterface[];
}

const initialState: InitialState = {
  platforms: [],
  pending: false,
  error: "",
  games: [],
  game: null,
};

export const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    filterGames(
      state,
      action: PayloadAction<{ games: GameInterface[]; platform: string }>
    ) {
      state.platforms = action.payload.games;
      const { games, platform } = action.payload;
      state.platforms = games.filter((game) => game.platforms === platform);
      state.platforms = [...state.platforms];
    },
  },
  extraReducers(builder) {
    builder.addCase(getAllGames.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(getAllGames.fulfilled, (state, action) => {
      state.pending = false;
      state.games = action.payload;
      return state;
    });
    builder.addCase(getAllGames.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
    builder.addCase(getGame.pending, (state) => {
      state.pending = true;
      return state;
    });
    builder.addCase(getGame.fulfilled, (state, action) => {
      state.pending = false;
      state.game = action.payload;
      return state;
    });
    builder.addCase(getGame.rejected, (state, action) => {
      state.pending = false;
      state.error = action.error;
      return state;
    });
    // builder.addCase(getGamesByUserId.pending, (state) => {
    //   state.pending = true;
    //   return state;
    // });
    // builder.addCase(getGamesByUserId.fulfilled, (state, action) => {
    //   state.pending = false;
    //   state.games = action.payload;
    //   return state;
    // });
    // builder.addCase(getGamesByUserId.rejected, (state, action) => {
    //   state.pending = false;
    //   state.error = action.error;
    //   return state;
    // });
  },
});

export const { filterGames } = gamesSlice.actions;
export default gamesSlice.reducer;
