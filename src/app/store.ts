import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from "../features/user/userSlice"
import repoReducer from "../features/repository/repositorySlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    repository: repoReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
