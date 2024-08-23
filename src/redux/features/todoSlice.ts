import { createSlice } from "@reduxjs/toolkit";

import todoReducer from "./features/todoSlice";
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
});

export default todoSlice.reducer;
