import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, } from '../../app/store';
import { fetchRepo } from './repositoryApi';

export interface RepoState {
  initialValue: [],
  value: any;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: RepoState = {
  initialValue: [],
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
      state.initialValue = action.payload

    },
    filterrepo: (state, action: PayloadAction<any>) => {
      const searchProducts = state.initialValue.filter((data: any) => {
        if (action.payload === "") return state.initialValue
        if (data.name.toLowerCase().includes(action.payload.toLowerCase())) {
          return data
        }
      })
      
      state.value = searchProducts;
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
        state.initialValue = action.payload
      })
      .addCase(fetchRepoAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { fetchrepo, filterrepo} = repoSlice.actions;

export const selectRepo = (state: RootState) => state.repository.value;
export const selectStatus = (state: RootState) => state.repository.status;


export default repoSlice.reducer;
