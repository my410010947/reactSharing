import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export interface GoodsState {
  id: number,
  title: string,
  price: number,
  count: number,
  src: string,
  description: string
}

const initialState: GoodsState[] = [];

export const addAsync = createAsyncThunk("goods/addAsync",async (item: GoodsState) => {
  return new Promise((resolve, reject) => {
    //setTimeout(resolve, 100, item);
    setTimeout(reject,100,item);
  })
})

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {
    add: (state: GoodsState[], action) => {
      const index = state.findIndex(item => item.id === action.payload.id);
      index >= 0 ? (state[index].count += action.payload.count) : (state.push(action.payload))
    },
    updateCount: (state: GoodsState[], action) => {
      state[action.payload.index].count = action.payload.count / 1;
    },
    remove: (state: GoodsState[], action) => {
      state.splice(state.findIndex(item => item.id === action.payload), 1)
    },
    empty: (state: GoodsState[]) => {
      state.length = 0;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addAsync.pending, () => { console.log('pending') })
      .addCase(addAsync.fulfilled, (state, action) => {
        const index = state.findIndex(item => item.id === (action.payload as any).id);
        index >= 0 ? (state[index].count += (action.payload as any).count) : (state.push((action.payload as any)))
      })
      .addCase(addAsync.rejected, () => console.log('rejected'))
  }
});

export const goodsSelector = (state: GoodsState[]) => (state as any).goodsReducer;
export const { add, remove, empty, updateCount } = goodsSlice.actions;

export default goodsSlice.reducer;

