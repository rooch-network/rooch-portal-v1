import { Settings, Target, User } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { useTranslation } from "react-i18next";

interface SidebarRoutesProps {
  onClose: () => void;
}

export const SidebarRoutes = ({ onClose }: SidebarRoutesProps) => {
  const { t } = useTranslation();
  const routes = [
    { icon: User, label: t("Sidebar.portfolio"), href: "/" },
    { icon: Target, label: t("Sidebar.activity"), href: "/activity" },
    { icon: Settings, label: t("Sidebar.setting"), href: "/setting" },
  ];

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
          onClose={onClose}
        />
      ))}
    </div>
  );
};
