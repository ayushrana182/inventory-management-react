import React from 'react';
import './App.css';
import DashboardPage from './container/DashboardPage';
import ItemPage from './container/ItemPage';
import { BrowserRouter, Switch } from 'react-router-dom';
import PrivateRoute from './hoc/PrivateRoute';
import PublicRoute from './hoc/PublicRoute';
import LoginPage from './container/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <PublicRoute path="/login" exact component={LoginPage} />
          <PrivateRoute path="/" exact component={DashboardPage} />
          <PrivateRoute path="/item" exact component={ItemPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
