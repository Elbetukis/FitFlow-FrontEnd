// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import CreateRoutine from './components/modals/CreateRoutineModal';
import ProgressTracking from './components/ProgressTracking';
import Community from './components/Community';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/Login" component={Login} />
        <Route path="/register" component={Registration} />
        <Route path="/Home" component={Home} />
        <Route path="/create-routine" component={CreateRoutine} />
        <Route path="/progress-tracking" component={ProgressTracking} />
        <Route path="/community" component={Community} />
        <Route path="/profile" component={Profile} />
        <Route path="/" exact>
          <Redirect to="/Login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;


