import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewAppName from './pages/NewAppName';
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index';
let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App>
        <Route path="/" component={NewAppName} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
