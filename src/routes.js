import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import CounterPage from './components/CounterPage';
import Page from './components/Pages';
import TimePage from './components/TimePage';

export default (
  <Route component={App} path='/'>
     <IndexRoute component={Page} />
     <Route component={CounterPage} path='counters' />
     <Route component={TimePage} path='time' />
  </Route>
);
