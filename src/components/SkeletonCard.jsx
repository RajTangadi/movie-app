export default function SkeletonCard() {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
      <div className="animate-pulse">
        <div className="sm:rounded-t-lg w-full sm:h-36 bg-slate-200 dark:bg-slate-700"></div>
        <div className="p-2">
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3 mb-2"></div>
          <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
