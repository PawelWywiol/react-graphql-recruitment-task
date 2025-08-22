'use client';

import { Component, type ReactNode } from 'react';

import { ErrorBoundaryAlert } from './error-boundry-alert';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  public componentDidCatch(/* error: Error, errorInfo: ErrorInfo */) {
    //TODO: Implement error logging e.g. Sentry
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return <ErrorBoundaryAlert />;
    }

    return this.props.children;
  }
}
