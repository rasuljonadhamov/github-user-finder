import { createSlice } from "@reduxjs/toolkit";

interface IState {
  toggleTeam: boolean;
}

const initialState: IState = {
  toggleTeam: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setTheme(state, { payload }) {
      state.toggleTeam = !payload;
    },
  },
});

export const { setTheme } = appSlice.actions;

export default appSlice.reducer;


