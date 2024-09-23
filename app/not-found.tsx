import { Home, WandSparkles } from "lucide-react";

const NotFound = () => {
  return (
    <div className="h-[calc(100dvh-4rem)] w-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-2">
        <WandSparkles className="text-purple-700 animate-pulse" />
        <p className="text-neutral-400">Page not found!</p>
        <button className="flex items-center text-xs border text-neutral-300 border-neutral-700 px-2 py-1 rounded-sm bg-neutral-800 hover:bg-neutral-800/60">
          <Home className="h-3 w-3 mr-2" /> go home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
