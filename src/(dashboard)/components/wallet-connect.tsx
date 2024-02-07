import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

export const WalletConnect = () => {
  const { t } = useTranslation();

  return (
    <>
      <Button variant="default" size="sm" className="hidden md:flex">
        {t("WalletConnect.connectWallet")}
      </Button>
      <Button variant="default" size="sm" className="md:hidden flex">
        {t("WalletConnect.connectWallet")}
      </Button>
    </>
  );
};
