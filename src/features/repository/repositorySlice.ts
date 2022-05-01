import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchRepo } from './repositoryApi';

export interface RepoState {
  value: any;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: RepoState = {
  value: [],
  status: 'idle',
};
export const fetchRepoAsync = createAsyncThunk(
  'user/fetchRepo',
  async (username: string ) => {
    const response = await fetchRepo(username);
    return response.data;
  }
);

export const repoSlice = createSlice({
  name: 'repository',
  initialState,
  reducers: {
    fetchrepo: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchRepoAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRepoAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(fetchRepoAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { fetchrepo} = repoSlice.actions;

export const selectRepo = (state: RootState) => state.repository.value;


export default repoSlice.reducer;
