import React from 'react';

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);

  const handleError = (error) => {
    setError(error);
  };

  return (
    <div>
      {error ? (
        <div>
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default ErrorBoundary;