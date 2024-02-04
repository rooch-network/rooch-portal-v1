import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  return (
    <div className="p-4 border-b border-zinc-200/40 h-full flex items-center">
      <div className="flex items-center justify-end w-full gap-x-2">
        {/* Mode Toggle */}
        <ModeToggle />
        {/* Wallet Connect */}
        <div>Connect Wallet</div>
      </div>
    </div>
  );
};
