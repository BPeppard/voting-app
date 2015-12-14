import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import { HomeContainer } from './components/Home';
import Poll from './components/Poll';
import { CreatePollContainer } from './components/CreatePoll';
import Results from './components/Results';
// import { setState } from './action_creators';

require('./style.css');

const history = createBrowserHistory();

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    polls: [
      {
        title: 'My Poll',
        options: ['option 1', 'option 2']
      }, {
        title: 'My Other Poll',
        options: ['answer 1', 'answer 2']
      }
    ]
  }
});

const routes = (
  <Route component={App}>
    <Route path="/" component={HomeContainer} />
    <Route path="/create" component={CreatePollContainer} />
    <Route path="/poll" component={Poll} />
    <Route path="/results" component={Results} />
  </Route>);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
