import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";

export const Logo = () => {
  const { theme } = useTheme();
  const [logoSrc, setLogoSrc] = useState<string>("/rooch_black_combine.svg");

  useEffect(() => {
    switch (theme) {
      case "dark": {
        setLogoSrc("/rooch_white_combine.svg");
        break;
      }
      case "light": {
        setLogoSrc("/rooch_black_combine.svg");
        break;
      }
      case "system":
      default: {
        // Check the system theme
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches
          ? "dark"
          : "light";
        setLogoSrc(
          systemTheme === "dark"
            ? "/rooch_white_combine.svg"
            : "/rooch_black_combine.svg"
        );
        break;
      }
    }
  }, [theme]);

  return (
    <img
      src={logoSrc}
      alt="Logo"
      height={130}
      width={130}
      className="cursor-pointer hover:opacity-75 transition"
    />
  );
};
