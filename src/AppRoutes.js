import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from "./Store/store"
import { checkAutenticated } from "./HelpersFunctions/HelpersFunctions"
import HomePage from './Pages/HomePage/HomePage';
import NotFound from './Pages/NotFound/NotFound';
import Projects from './Pages/Projects/Projects';
import TableExample from './Pages/TableExample/TableExample';

function AppRoutes() {

  let isAuthenticated = checkAutenticated();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Routes>
            <Route path="*" element={isAuthenticated ? <NotFound /> : <Login />} />
            <Route path="/" element={isAuthenticated ? <HomePage /> : <Login />} />
            <Route path="/projects" element={isAuthenticated ? <Projects /> : <Login />} />
            <Route path="/table-examples" element={isAuthenticated ? <TableExample /> : <Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default AppRoutes;
