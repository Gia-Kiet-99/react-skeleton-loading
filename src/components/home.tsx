import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from './errorBoundary';
import ArticlesComponent from './article';
import UserComponent from './user';

const Articles = React.memo(ArticlesComponent);
const User = React.memo(UserComponent);

const Modal = React.lazy(() => import(/* webpackChunkName: 'modal' */ /* webpackPrefetch: true */ 'components/modal'));

const Home = () => {
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
    <div className="home">
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
  );
};

export default Home;
