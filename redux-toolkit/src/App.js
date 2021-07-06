import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth'
import UserProfile from './components/UserProfile';
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from './store/auth';

function App() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Header />
      <Counter />
      {!isAuthenticated && <Auth onLogin={() => dispatch(authActions.login())} />}
      {isAuthenticated && <UserProfile />}
    </Fragment>
  );
}

export default App;
