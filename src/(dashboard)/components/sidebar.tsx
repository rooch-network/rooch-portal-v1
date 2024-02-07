import { ProfileInfo } from "@/components/profile-info";
import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

interface SidebarProps {
  onClose: () => void;
}

export const Sidebar = ({ onClose }: SidebarProps) => {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto">
      <div className="h-[85px] flex items-center justify-start px-6 py-12">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes onClose={onClose} />
      </div>
      <div className="flex items-end justify-start h-full w-full p-6">
        <div className="flex items-center w-full">
          <ProfileInfo />
        </div>
      </div>
    </div>
  );
};
