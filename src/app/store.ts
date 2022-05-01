import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from "../features/user/userSlice"
import repoReducer from "../features/repository/repositorySlice"

export const store = configureStore({
  reducer: {
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
