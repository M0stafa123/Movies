import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./reducers/moviesReducer";
import castReducer from "./reducers/castReducer";
export const store = configureStore({
  reducer: {
    Movies: moviesReducer,
    Cast: castReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
