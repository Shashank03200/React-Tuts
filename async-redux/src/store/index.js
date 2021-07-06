import { configureStore } from '@reduxjs/toolkit';

import UISliceReducers from './ui-slice.js'
import cartSliceReducers from './cart-slice.js'




const store = configureStore({
    reducer: {
        ui: UISliceReducers,
        cart: cartSliceReducers
    }
})

export default store;