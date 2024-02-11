import {
  Bitcoin,
  Compass,
  Layers,
  LayoutGrid,
  Scroll,
  UserCog,
} from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { useTranslation } from "react-i18next";

interface SidebarRoutesProps {
  onClose: () => void;
}

export const SidebarRoutes = ({ onClose }: SidebarRoutesProps) => {
  const { t } = useTranslation();
  const routes = [
    { icon: Bitcoin, label: t("Sidebar.assets"), href: "/" },
    { icon: Layers, label: t("Sidebar.staking"), href: "/staking" },
    { icon: Scroll, label: t("Sidebar.mint"), href: "/mint" },
    { icon: LayoutGrid, label: t("Sidebar.apps"), href: "/apps" },
    {
      icon: Compass,
      label: t("Sidebar.transactions"),
      href: "/transactions",
    },
    { icon: UserCog, label: t("Sidebar.settings"), href: "/settings" },
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
