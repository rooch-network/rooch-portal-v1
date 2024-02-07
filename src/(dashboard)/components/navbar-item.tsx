import { LanguageSwitcher } from "@/components/language-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { WalletConnect } from "./wallet-connect";

export const NavbarItem = () => {
  return (
    <div className="flex items-center justify-end gap-x-2">
      {/* language */}
      <LanguageSwitcher />
      {/* Mode Toggle */}
      <ModeToggle />
      {/* Wallet Connect */}
      <WalletConnect />
    </div>
  );
};
