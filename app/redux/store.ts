import { configureStore } from "@reduxjs/toolkit";

const dummyReducer = (state = {}) => state;

export const store = configureStore({
  reducer: {
    // Add reducers here
    app: dummyReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>    ;
export type AppDispatch = AppStore["dispatch"];