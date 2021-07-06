import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './compon  ents/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { sendCartData, fetchCartData } from './store/cart-actions';

import Notification from './components/UI/Notification.js';
import { Fragment } from 'react';

let isInitial = true;

function App() {

  const dispatch = useDispatch();
  const isCartVisible = useSelector(state => state.ui.isCartVisible);
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return
    }
    dispatch(sendCartData(cart))
  }, [cart, dispatch])

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {isCartVisible && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
