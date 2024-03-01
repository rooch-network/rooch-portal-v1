import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export function SftDetails() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(84.4), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex items-center justify-start w-full gap-2 text-muted-foreground">
        <span className="text-sm">Process</span>
        <Progress value={progress} />
        <span className="text-sm">84.4% Minted</span>
      </div>
      <div className="flex items-start justify-start gap-x-6 w-full">
        <div className="w-1/2 h-full"></div>
        <div className="w-1/2 h-full flex flex-col items-start justify-start"></div>
      </div>
    </>
  );
}
