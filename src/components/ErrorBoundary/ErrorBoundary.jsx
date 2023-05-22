import React from "react";
import { ErrorHeader, ErrorWrapper } from "./styled";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorWrapper>
          <ErrorHeader>
            There is an Error. Please, refresh this page.
          </ErrorHeader>
        </ErrorWrapper>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
