import { Button } from "@/components/ui/button";

export const WalletConnect = () => {
  return (
    <>
      <Button variant="default" size="sm" className="hidden md:flex ml-2">
        Connect Wallet
      </Button>
      <Button variant="default" size="sm" className="md:hidden flex ml-2">
        Connect
      </Button>
    </>
  );
};
