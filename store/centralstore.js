

// src/store.js

import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from "../app/features/features/category/categorySlice"
import courseReducer from "../app/features/features/course/courseSlice"
const store = configureStore({
  reducer: {
    // Your reducers will go here
    categoryReducer:categoryReducer,
    courseReducer :courseReducer
  },
});

export default store;
