import { Settings, Target, User } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

const userRoutes = [
  { icon: User, label: "Profile", href: "/dashboard/profile" },
  { icon: Target, label: "Activity", href: "/dashboard/activity" },
  { icon: Settings, label: "Setting", href: "/dashboard/setting" },
];

export const SidebarRoutes = () => {
  const routes = userRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
