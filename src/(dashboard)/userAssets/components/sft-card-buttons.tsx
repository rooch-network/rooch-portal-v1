import { Button } from "@/components/ui/button";

export const SftCardButtons = () => {
  return (
    <>
      <Button
        size="sm"
        variant="outline"
        className="rounded-lg cursor-pointer text-teal-500 border-teal-500 hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
      >
        List
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="rounded-lg cursor-pointer text-teal-500 border-teal-500 hover:border-teal-500 hover:text-teal-500 hover:bg-teal-500/20 w-full flex-1"
      >
        Split
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="rounded-lg cursor-pointer border-red-500 text-red-500 hover:border-red-500 hover:text-red-500 hover:bg-red-500/20 w-full flex-1"
      >
        Burn
      </Button>
      <Button
        size="sm"
        variant="outline"
        className="rounded-lg cursor-pointer border-amber-500 text-amber-500 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/20 w-full flex-1"
      >
        Transfer
      </Button>
    </>
  );
};
