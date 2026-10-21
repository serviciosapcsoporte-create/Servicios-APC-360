import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("React Error Boundary Caught:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-2xl font-bold mb-2">Servicios APC</h1>
          <p className="text-[#64748B] mb-6 max-w-md">
            Se detectó una interrupción en la carga de recursos de la página.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-[#25D366] hover:bg-[#20c05c] text-white font-medium rounded-lg transition-colors"
          >
            Reintentar / Recargar
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}