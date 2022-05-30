import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// calling the api
export const getBooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    // rejectedWithValue => to handle the errors
    const { rejectedWithValue } = thunkAPI;

    // fetching the data with the js normal way => try, catch => for the errors
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectedWithValue(error);
    }
  }
);

// creating the reducers
const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isLaoding: false, error: null },
  reducers: {},

  //   creating the extraReducers
  extraReducers: {
    // while downloading
    [getBooks.pending]: (state, action) => {
      // while loading => appear
      state.isLoading = true;
      state.error = null;
    },

    // in case you get the data
    [getBooks.fulfilled]: (state, action) => {
      // while loading => do not appear
      state.isLoading = false;
      state.error = null;

      state.books = action.payload;
    },

    // in case there is a problem while getting the data, it will be rejected
    [getBooks.rejected]: (state, action) => {
      // while loading => do not appear
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default bookSlice.reducer;
