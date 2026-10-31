export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-brand-slate-bg animate-pulse p-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Skeleton */}
        <div className="pt-20 text-center space-y-6 max-w-3xl mx-auto">
          <div className="h-6 w-48 bg-slate-200 rounded-full mx-auto"></div>
          <div className="h-16 w-3/4 bg-slate-300 rounded-xl mx-auto"></div>
          <div className="h-4 w-full bg-slate-200 rounded mx-auto"></div>
          <div className="h-4 w-2/3 bg-slate-200 rounded mx-auto"></div>
          <div className="flex justify-center gap-4 pt-4">
            <div className="h-12 w-44 bg-slate-300 rounded-full"></div>
            <div className="h-12 w-44 bg-slate-200 rounded-full"></div>
          </div>
        </div>

        {/* Feature Skeleton */}
        <div className="max-w-5xl mx-auto h-72 bg-slate-200 rounded-card"></div>
      </div>
    </div>
  );
}
