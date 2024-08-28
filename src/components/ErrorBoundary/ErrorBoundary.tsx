import React, { Component, type ErrorInfo, type ReactNode } from "react";

import { Fallback } from "../Fallback/Fallback";

import {
  type TypeErrorBoundaryProps,
  type TypeErrorBoundaryState
} from "./ErrorBoundary.types";

class ErrorBoundary extends Component<
  TypeErrorBoundaryProps,
  TypeErrorBoundaryState
> {
  constructor(props: TypeErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, info: "" };
  }

  static getDerivedStateFromError(error: Error): TypeErrorBoundaryState {
    return { hasError: true, info: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log("Type of error: ", error.name);
    console.log("Message: ", error.message);
    console.log("Component Stack: ", info.componentStack);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <Fallback logger={this.state.info} />;
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
