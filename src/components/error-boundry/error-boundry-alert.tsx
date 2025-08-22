import { TriangleAlertIcon } from 'lucide-react';

export const ErrorBoundaryAlert = () => (
  <div className="flex min-h-screen items-center justify-center bg-gray-50">
    <div className="rounded-lg bg-white p-8 shadow-lg">
      <div className="mb-4 text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-red-100 p-3">
          <TriangleAlertIcon className="h-6 w-6 text-red-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900">Something went wrong</h2>
        <p className="mt-2 text-gray-600">
          An unexpected error occurred. Please refresh the page or try again later.
        </p>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => globalThis.location.reload()}
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Refresh Page
        </button>
      </div>
    </div>
  </div>
);
