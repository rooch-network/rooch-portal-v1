import { Routes, Route } from "react-router-dom";
import { PortfolioLayout } from "../(portfolio)/portfolio-layout";
import { ActivityLayout } from "../(activity)/activity-layout";
import { SettingLayout } from "../(setting)/setting-layout";

export const MainContent = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard/portfolio" element={<PortfolioLayout />} />
        <Route path="/dashboard/activity" element={<ActivityLayout />} />
        <Route path="/dashboard/setting" element={<SettingLayout />} />
      </Routes>
    </div>
  );
};
