import { Routes, Route } from "react-router-dom";
import { UserAssetsLayout } from "../userAssets/user-assets-layout";
import { UserSettingLayout } from "../userSetting/user-setting-layout";
import { UserTransactionsLayout } from "../userTransactions/user-transactions-layout";
import { UserSelfStaking } from "../userSelfStaking/user-self-staking";
import { UserMintLayout } from "../userMint/user-mint-layout";
import { UserAppsLayout } from "../userApps/user-apps-layout";

export const MainContent = () => {
  return (
    <div className="h-full w-full p-4 md:p-6">
      <Routes>
        <Route path="/" element={<UserAssetsLayout />} />
        <Route path="/staking" element={<UserSelfStaking />} />
        <Route path="/mint" element={<UserMintLayout />} />
        <Route path="/apps" element={<UserAppsLayout />} />
        <Route path="/transactions" element={<UserTransactionsLayout />} />
        <Route path="/settings" element={<UserSettingLayout />} />
      </Routes>
    </div>
  );
};
