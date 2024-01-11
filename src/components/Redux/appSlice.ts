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

// const fetchUserData = async (username: string) => {
//   try {
//     const response = await fetch(`https://api.github.com/users/${username}`);
//     if (!response.ok) {
//       throw new Error(`Error fetching user data: ${response.status}`);
//     }
//     const data = await response.json();
//     setUser(data);

//     return data;
//   } catch (error) {
//     console.error("Error fetching user data:", error);
//     return null;
//   }
// };

// fetchUserData("Dasturchi-Mufid");
