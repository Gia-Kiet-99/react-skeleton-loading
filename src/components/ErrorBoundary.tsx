import React, { ErrorInfo } from 'react';
import './ErrorBoundary.css';

type PropsType = {
  fallback?: React.ReactElement,
  children: React.ReactNode
}

type StateType = {
  hasError?: boolean,
  error?: Error | null,
  errorInfo?: ErrorInfo | null
}

class ErrorBoundary extends React.Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      // hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  // static getDerivedStateFromError(error) {
  //   // Update state so the next render will show the fallback UI.
  //   return { hasError: true };
  // }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
    // You can also log error messages to an error reporting api here
  }

  render() {
    const { error, errorInfo } = this.state;
    if (errorInfo) {
      // Error path
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error && error.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    const { children } = this.props;
    return children;
  }
}

export default ErrorBoundary;
