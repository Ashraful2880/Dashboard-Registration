import { configureStore } from "@reduxjs/toolkit";
import { paginationSlice } from './../Slices/paginationSlice';
import { generateDataSlice } from './../Slices/generateDataSlice';

export const Store = configureStore({
    reducer: generateDataSlice,
});