import React from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import './App.scss';

const Articles = React.lazy(() => import('components/Article'));
const User = React.lazy(() => import('components/User'));

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
