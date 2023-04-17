import { createSlice } from '@reduxjs/toolkit';

const counterProductsSlices = createSlice({
  name: 'counterProducts',
  initialState: {
    counterProducts: 0,
  },
  reducers: {
    setCounterProducts: (state, action) => {
      const arr = action.payload.map(({ cartQuantity }) => (cartQuantity));
      console.log(arr);
      state.counterProducts = arr.reduce((sum, el) => sum + el, 0);

    },
    incrementCounterProducts: (state) => {
      state.counterProducts += 1;
    },
    decrementCounterProducts: (state) => {
      state.counterProducts -= 1;
    },
  },
});

export default counterProductsSlices.reducer;
export const {
  setCounterProducts,
  incrementCounterProducts,
  decrementCounterProducts,
} = counterProductsSlices.actions;
