import { createSlice } from '@reduxjs/toolkit';
import { getCartFromDatabase } from '../../api/getCartFromDatabase';
import { updateCartDataOnserver } from '../../api/updateCartOnServer';
import { updateLocalStorageCartItemsFromserver } from '../../commonHelpers/updateLocalStorCartItemsFromServer';
import { setCounterProducts } from './counterProductsSlices';

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addCartItems: (state, action) => {
      state.cartItems.push({ ...action.payload });
      localStorage.setItem('products', JSON.stringify(state.cartItems));
    },
    addCartItemsFromData: (state, action) => {
      state.cartItems = action.payload;
    },
    setCartItemsFromLocalStorage: (state, action) => {
      state.cartItems = action.payload;
    },
    setCartItemsFromDatabase: (state, action) => {
      state.cartItems = action.payload;
    },
    addCartItemsToDatabase: (state, action) => {
      state.cartItems = action.payload;
    },
  },

});

// This function gets carts from local Storage, updates info
// about each item and sets updated info to state

export const setUpdatedCartItemsFromLocal = () => async (dispatch) => {
  const itemsArray = await updateLocalStorageCartItemsFromserver();
  dispatch(setCartItemsFromLocalStorage(itemsArray));
};

// This function downloads cartItems from DB if any and setsto state
export const getCartItems = () => async (dispatch) => {
  const itemsInDB = await getCartFromDatabase();
  console.log(itemsInDB);
  if (itemsInDB.length >= 1) {
    // itemsInDB.map(({ product: { itemNo, quantity, _id }, cartQuantity }) => ({
    //   itemNo, quantity, _id, cartQuantity,
    // }));
    console.log(itemsInDB);
    dispatch(addCartItemsFromData(itemsInDB));
    dispatch(setCounterProducts(itemsInDB));
  }
};

// This function sends data to cart in DB, receives response and sets cart to sate
export const updateCartOnserver = (cartItemData) => async (dispatch) => {
  const updatedItemsInDb = await updateCartDataOnserver(cartItemData);
  const { products } = updatedItemsInDb;
  dispatch(setCartItemsFromDatabase(products));
};

export default cartItemsSlice.reducer;
export const {
  addCartItemsToLocal, setCartItemsFromDatabase, setCartItemsFromLocalStorage, addCartItems,
  addCartItemsFromData,
} = cartItemsSlice.actions;
