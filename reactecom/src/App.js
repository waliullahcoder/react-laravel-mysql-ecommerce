import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import routes from './routes/routes';
import Home from './components/frontend/Home';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
 
  return (
    <div className="App">
    <Router>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/login" Component={Login} />
      <Route path="/register" Component={Register} />
        <Route path="/" element={<MasterLayout />}>
          {routes.filter(route => route.component)
          .map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={<Component />}
            />
          )
          )}
        
        </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
