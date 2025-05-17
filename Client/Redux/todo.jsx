import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Corrected action name: 'fetchTodos' instead of 'fetcgTodos'
// Corrected arrow function syntax
export const fetchTodos = createAsyncThunk('todo/fetchTodos', async () => {
  const response = await fetch("http://localhost:8000");
  return await response.json();
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: null, // fixed typo: 'date' => 'data'
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true;
        state.isError = false; // Optional: reset error on new request
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        console.error("Error:", action.error); // fixed incorrect 'activeAnimations'
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default todoSlice.reducer;
