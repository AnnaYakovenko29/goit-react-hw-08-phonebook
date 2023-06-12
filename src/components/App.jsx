import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../Redux/store';

import AuthWrapper from './AuthWrapper/AuthWrapper';
import NavBar from './NavBar/NavBar';

const PrivateRoute = lazy(() => import('./PrivateRoute/PrivateRoute'));
const PublicRoute = lazy(() => import('./PablicRoute/PublicRoute'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const ContactsPage = lazy(() => import('.//pages/ContactsPage'));

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthWrapper>
          <div>
            <NavBar />
            <Suspense fallback={<p>...Loading page</p>}>
              <Routes>
                <Route element={<PublicRoute />}>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/registration" element={<RegisterPage />} />
                </Route>

                <Route element={<PrivateRoute />}>
                  <Route path="/contacts" element={<ContactsPage />} />
                </Route>
              </Routes>
            </Suspense>
          </div>
        </AuthWrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;