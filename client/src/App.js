import React from 'react';
import './App.scss';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Home from './components/Home';

const App = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/register" exact component={Register} />
    <Route path="/login" exact component={Login} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default App;

