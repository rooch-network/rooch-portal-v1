import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { MobileSidebar } from "./mobile-sidebar";
import { Logo } from "./logo";

export const Navbar = () => {
  return (
    <div className="p-4 border-b border-zinc-200/40 dark:border-zinc-700/80 h-full flex items-center">
      <div className="md:hidden">
        <Logo />
      </div>
      <div className="flex items-center justify-end w-full gap-x-2">
        {/* Mode Toggle */}
        <ModeToggle />
        {/* Wallet Connect */}
        <Button onClick={() => {}} variant="default" size="sm">
          Connect Wallet
        </Button>
        <MobileSidebar />
      </div>
    </div>
  );
};
