import { Bitcoin, Target, UserCog } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { useTranslation } from "react-i18next";

interface SidebarRoutesProps {
  onClose: () => void;
}

export const SidebarRoutes = ({ onClose }: SidebarRoutesProps) => {
  const { t } = useTranslation();
  const routes = [
    { icon: Bitcoin, label: t("Sidebar.portfolio"), href: "/" },
    { icon: Target, label: t("Sidebar.activity"), href: "/activity" },
    { icon: UserCog, label: t("Sidebar.setting"), href: "/setting" },
  ];

  return (
    <div className="flex flex-col w-full gap-y-2">
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
