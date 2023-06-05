import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./Store/store"
import { checkAutenticated } from "./HelpersFunctions/HelpersFunctions"

function AppRoutes() {

  let isAuthenticated = checkAutenticated();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="*" element={isAuthenticated ? <h1>NotFound</h1> : <Login />} />
            <Route path="/" element={isAuthenticated ? <h1>Home Page</h1> : <Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default AppRoutes;