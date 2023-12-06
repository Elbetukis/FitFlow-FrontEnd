// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


