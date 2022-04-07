import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Minh Huy",
    age: 20,
    about: "I'm a Software Engineer",
    avaUrl:
      "https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a",
    theme: "#ff9051",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.about = action.payload.about;
      state.avaUrl = action.payload.about;
      state.theme = action.payload.theme;
    },
  },
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
