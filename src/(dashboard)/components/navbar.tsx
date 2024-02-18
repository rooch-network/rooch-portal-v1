import { MobileSidebar } from "./mobile-sidebar";
import { NavbarItem } from "./navbar-item";

export const Navbar = () => {
  return (
    <div className="py-4 px-4 md:px-6 h-full flex items-center border-b shadow-sm bg-background">
      <div className="flex items-center justify-between md:justify-end w-full gap-x-2">
        <MobileSidebar />
        <NavbarItem />
      </div>
    </div>
  );
};
