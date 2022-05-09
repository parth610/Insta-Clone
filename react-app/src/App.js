import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import { authenticate } from './store/session';
import LandingPage from './components/LandingPage';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import UserProfileComponent from './components/UserProfile';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {user && <NavBar />}
      <Switch>
            <ProtectedRoute path='/home'>
              <Home />
            </ProtectedRoute>
            <Route path='/' exact={true} >
              <LandingPage />
            </Route>
        <ProtectedRoute path='/users/:userId' exact={true} >
            <UserProfileComponent user={user} />
          </ProtectedRoute>
          <Route>
            <h1>Page Not Found Please check your url</h1>
          </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
