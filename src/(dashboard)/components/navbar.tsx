import { MobileSidebar } from "./mobile-sidebar";
import { NavbarItem } from "./navbar-item";

export const Navbar = () => {
  return (
    <div className="py-4 px-6 border-b border-zinc-200/40 dark:border-zinc-700/80 h-full flex items-center">
      <div className="flex items-center justify-between md:justify-end w-full gap-x-2">
        <MobileSidebar />
        <NavbarItem />
      </div>
    </div>
  );
};
