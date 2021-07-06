import { createSlice } from '@reduxjs/toolkit';


const initialCartState = {
    cartItems: [],
    totalItems: 0
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: initialCartState,
    reducers: {
        addItemToCart(state, action) {
            const { id, title, price } = action.payload;
            const foundIndex = state.cartItems.findIndex(cartItem => cartItem.id === id)
            state.totalItems++;
            if (foundIndex !== -1) {
                const foundItem = state.cartItems[foundIndex];
                foundItem.qty++;
                foundItem.amount += price
            } else {
                const newCartItem = {
                    id,
                    title,
                    qty: 1,
                    price,
                    amount: price
                }
                state.cartItems.push(newCartItem);
            }


        },
        removeItemsFromCart(state, action) {
            const id = action.payload.id
            const foundIndex = state.cartItems.findIndex(cartItem => cartItem.id === id)
            const foundItem = state.cartItems[foundIndex];

            if (foundItem.qty === 1) {
                state.cartItems.splice(foundIndex, 1);
            } else {
                foundItem.qty--;
                foundItem.amount = foundItem.amount - foundItem.price
            }
            state.totalItems--;
        },
        replaceCart(state, action) {
            state.cartItems = action.payload.cartItems;
            state.totalItems = action.payload.totalItems;
        }
    }
})

export const CartItemActions = cartSlice.actions;

export default cartSlice.reducer;