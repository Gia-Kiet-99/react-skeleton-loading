import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

const Home = React.lazy(() => import(/* webpackChunkName: 'home' */ 'components/home'));
const Login = React.lazy(() => import(/* webpackChunkName: 'login' */ 'components/login'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Suspense>
  );
}

export default App;
