import { configureStore } from '@reduxjs/toolkit';
import blogReducer from './features/blogSlice';

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;