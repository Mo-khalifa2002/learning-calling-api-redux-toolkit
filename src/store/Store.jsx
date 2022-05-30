import { configureStore } from "@reduxjs/toolkit";
// import bookReducer from "./BookSlice";
import books from "./BookSlice";

export const store = configureStore({
  reducer: { books },
});
