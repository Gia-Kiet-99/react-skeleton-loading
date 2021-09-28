import React from 'react';
import Articles from './component/Articles';
import User from './component/User';
import ErrorBoundary from './component/ErrorBoundary';

function App() {
  return (
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
  );
}

export default App;
