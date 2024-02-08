import { Routes, Route } from "react-router-dom";
import { PortfolioLayout } from "../portfolio/portfolio-layout";
import { ActivityLayout } from "../activity/activity-layout";
import { SettingLayout } from "../setting/setting-layout";

export const MainContent = () => {
  return (
    <div className="h-full w-full px-24">
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/activity" element={<ActivityLayout />} />
        <Route path="/setting" element={<SettingLayout />} />
      </Routes>
    </div>
  );
};
