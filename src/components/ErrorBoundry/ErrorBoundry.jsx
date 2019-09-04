import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: ""
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error: errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <div>Oooops, something went wrong.</div>;
    } else {
      return <div>{this.props.children}</div>;
    }
  }
}

export default ErrorBoundry;
