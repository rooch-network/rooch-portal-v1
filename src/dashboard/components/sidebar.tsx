import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r dark:border-zinc-900 flex flex-col overflow-y-auto bg-white dark:bg-zinc-900 shadow-sm">
      <div className="flex items-center justify-start p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
