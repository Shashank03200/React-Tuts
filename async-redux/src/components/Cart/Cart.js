import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

import { useSelector, useDispatch } from 'react-redux';
import { CartItemActions } from '../../store';

const Cart = (props) => {

  const cartList = useSelector(state => state.cart.cartItems)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartList.map(cartItem => {
            return <CartItem key={cartItem.id} item={cartItem} />
          })
        }
      </ul>
    </Card>
  );
};

export default Cart;
