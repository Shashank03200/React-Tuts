import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { UIActions } from '../../store/ui-slice';
import { useDispatch, useSelector } from 'react-redux';
import { CartItemActions } from '../../store/cart-slice';

const ProductItem = (props) => {




  const dispatch = useDispatch();

  const { title, price, description, id } = props;


  const addToCartHandler = () => {
    if (!window.navigator.onLine) {
      dispatch(UIActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Internet Unavailable'
      }));
      return;
    }
    dispatch(CartItemActions.addItemToCart({ id, price, title }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler} >Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
