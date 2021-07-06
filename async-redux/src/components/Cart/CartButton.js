import classes from './CartButton.module.css';

import { UIActions } from '../../store/ui-slice';

import { useSelector, useDispatch } from 'react-redux';

const CartButton = (props) => {

  const totalItems = useSelector(state => state.cart.totalItems);
  const dispatch = useDispatch();

  return (
    <button className={classes.button} onClick={() => dispatch(UIActions.toggleCartVisiblity)}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
