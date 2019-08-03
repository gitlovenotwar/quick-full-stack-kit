import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import rootReducer from './reducers';
import App from './containers/App';
import Home from './containers/Home';
import './api';
import './styles';

const history = createHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(/* applyMiddleware(...) */),
);

render(
  <Provider store={store}>
    <App history={history}>
      <Router history={history}>
        <Route to="/" component={Home}/>
      </Router>
    </App>
  </Provider>,
  document.getElementById('root')
);
