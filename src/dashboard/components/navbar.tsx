import { ModeToggle } from "@/components/mode-toggle";
import { MobileSidebar } from "./mobile-sidebar";
import { WalletConnect } from "./wallet-connect";

export const Navbar = () => {
  return (
    <div className="py-4 px-6 border-b border-zinc-200/40 dark:border-zinc-700/80 h-full flex items-center">
      <div className="flex items-center justify-between md:justify-end w-full gap-x-2">
        <MobileSidebar />
        <div className="flex items-center justify-end gap-x-2">
          {/* Mode Toggle */}
          <ModeToggle />
          {/* Wallet Connect */}
          <WalletConnect />
        </div>
      </div>
    </div>
  );
};
