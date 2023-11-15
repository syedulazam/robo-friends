import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error) {
    this.setState({ hasError: true });
    console.log(error);
  }

  render() {
    if (this.state.hasError) {
      return <p>There is an error</p>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
