import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Redux/todo"; // Ensure file name is correct and ends with .js/.jsx if needed

export const store = configureStore({
  reducer: {
    todo: todoReducer, // The state will be accessible as state.todo in your components
  },
});
