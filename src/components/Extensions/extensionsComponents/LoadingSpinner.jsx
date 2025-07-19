export function LoadingSpinner() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-red-400 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-neutral-400">Loading extensions...</p>
      </div>
    </main>
  );
}
