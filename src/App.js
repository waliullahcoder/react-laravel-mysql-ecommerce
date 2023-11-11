import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import routes from './routes/routes';
function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
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
