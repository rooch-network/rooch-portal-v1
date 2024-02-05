import { Logo } from "./logo";
import { SidebarRoutes } from "./sidebar-routes";

export const Sidebar = () => {
  return (
    <div className="h-full border-r border-zinc-200/40 dark:border-zinc-700/80 flex flex-col overflow-y-auto ">
      <div className="hidden h-[80px] md:flex items-center justify-start p-6">
        <Logo />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
};
