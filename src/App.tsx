import React, { useState } from 'react';
import ErrorBoundary from 'components/errorBoundary';
import './App.scss';
import {
  BrowserRouter as Router, Link, Route, Switch,
} from 'react-router-dom';

const Articles = React.lazy(() => import(/* webpackChunkName: 'articles' */ 'components/article'));
const User = React.lazy(() => import(/* webpackChunkName: 'user' */ 'components/user'));
const Modal = React.lazy(() => import(/* webpackChunkName: 'modal' */ /* webpackPrefetch: true */ 'components/modal'));

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const onShowModalClick = (): void => {
    setShowModal(true);
  };
  const onHideModalClick = (): void => {
    setShowModal(false);
  };
  const modal = showModal ? (
    <Modal>
      <div className="modal">
        <h2>This is my Modal</h2>
        <button type="button" onClick={onHideModalClick}>
          Hide modal
        </button>
      </div>
    </Modal>
  ) : '';

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <div className="App">
          <header>
            <h1>React Skeletons</h1>
            <Link className="btn btn-success" to="/login">
              Login
            </Link>
            <button type="button" className="btn btn-light" onClick={onShowModalClick}>
              Show Modal
            </button>
          </header>

          <div className="content">
            <Articles />
            <ErrorBoundary>
              <User />
            </ErrorBoundary>
          </div>

          {modal}
        </div>

        <Switch>
          <Route path="/login">
            <div>
              hello
            </div>
          </Route>
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
