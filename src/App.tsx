import React from 'react';
import './App.scss';
// import Articles from './components/Article';
// import User from './components/User';
// import ErrorBoundary from './components/ErrorBoundary';
const Articles = React.lazy(() => import('components/Article'));
const User = React.lazy(() => import('components/User'));
const ErrorBoundary = React.lazy(() => import('components/ErrorBoundary'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <header>
          <h1>React Skeletons</h1>
        </header>

        <div className="content">
          <Articles />
          <ErrorBoundary>
            <User />
          </ErrorBoundary>
        </div>
      </div>
    </React.Suspense>
  );
}

export default App;
