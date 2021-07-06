import { UIActions } from "./ui-slice"
import { CartItemActions } from "./cart-slice";

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(UIActions.showNotification({
            status: 'pending',
            title: 'Wait',
            message: 'Adding to the cart'
        }))

        const sendRequest = async () => {
            const response = await fetch('https://module-13-d1737-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!response.ok) {
                throw new Error("Adding to cart failed");
            }

        }

        try {
            await sendRequest();
            dispatch(UIActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Added to your cart'
            }))
        } catch (err) {
            dispatch(UIActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Internal error'
            }))
        }


    }

};

export const fetchCartData = () => {
    return async (dispatch) => {

        const getData = async () => {
            const response = fetch('https://module-13-d1737-default-rtdb.firebaseio.com/cart.json')
            if (!response.ok) {
                throw new Error('Internal Error');
            }
            const data = await response.json();
            return data;
        };

        dispatch(UIActions.showNotification({
            status: 'pending',
            title: 'Wait',
            message: 'Loading'
        }))

        try {
            const cartData = await getData();
            dispatch(CartItemActions.replaceCart(cartData))
        } catch (err) {

            dispatch(UIActions.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Fetching cart data failed'
            }))
        }
    }
}