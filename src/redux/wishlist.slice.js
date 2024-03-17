import {createSlice} from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    lists: [],
  },
  reducers: {
    setWishlistName: (state, action) => {
      state.name = action.payload;
    },
    addItemToWishlist: (state, action) => {
      state.lists.push(action.payload);
    },
    removeItemFromWishlist: (state, action) => {
      state.lists = state.lists.filter(item => item.id !== action.payload.id);
    },
    clearWishlist: state => {
      state.lists = [];
    },
  },
});

export const {
  setWishlistName,
  addItemToWishlist,
  removeItemFromWishlist,
  clearWishlist,
} = wishlistSlice.actions;

export default wishlistSlice.reducer;
