export function ErrorDisplay({ error, onRetry }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-red-400 mb-4">{error}</p>
        <button 
          onClick={onRetry}
          className="px-4 py-2 bg-red-400 text-neutral-900 rounded-full font-medium hover:bg-red-500 transition-colors"
        >
          Retry
        </button>
      </div>
    </main>
  );
}

