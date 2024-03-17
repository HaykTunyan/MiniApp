import {configureStore} from '@reduxjs/toolkit';

import meSlice from './me.slice';
import wishlistSlice from './wishlist.slice';

export default configureStore({
  reducer: {
    me: meSlice,
    favorite: wishlistSlice,
  },
});
