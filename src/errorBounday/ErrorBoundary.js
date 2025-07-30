import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ErrorBoundary.module.scss";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

function ErrorFallback() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className={styles.errorContainer}>
      <h1>Oops... Something went wrong</h1>
      <p>Please contact admin for more information!!</p>
      <button onClick={handleBack}>Back to Home</button>
    </div>
  );
}

export default ErrorBoundary;
