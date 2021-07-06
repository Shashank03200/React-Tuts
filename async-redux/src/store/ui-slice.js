import { createSlice } from '@reduxjs/toolkit';

const initialUIState = { isCartVisible: false, notification: null }

const UISlice = createSlice({
    name: 'UISlice',
    initialState: initialUIState,
    reducers: {
        toggleCartVisiblity(state) {
            state.isCartVisible = !state.isCartVisible
        },
        showNotification(state, action) {
            const { status, title, message } = action.payload;
            state.notification = {
                status, title, message
            }
        }
    }
});

export const UIActions = UISlice.actions;

export default UISlice.reducer;