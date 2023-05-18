import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./Components/Formperson/personSlice";

const store = configureStore({
  reducer: {
    person: personReducer,
    // other reducers...
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
