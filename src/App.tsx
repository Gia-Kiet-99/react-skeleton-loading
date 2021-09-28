import React from 'react';
import Articles from './components/Article';
import User from './components/User';
import ErrorBoundary from './components/ErrorBoundary';

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
