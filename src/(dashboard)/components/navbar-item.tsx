import { LanguageSwitcher } from "@/components/language-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { WalletConnect } from "./wallet-connect";
import { Separator } from "@/components/ui/separator";

export const NavbarItem = () => {
  return (
    <div className="flex items-center justify-end gap-x-0">
      {/* language */}
      <LanguageSwitcher />
      {/* Mode Toggle */}
      <ModeToggle />
      {/* TODO: The Separator couldn't render */}
      <Separator orientation="vertical" />
      {/* Wallet Connect */}
      <WalletConnect />
    </div>
  );
};
