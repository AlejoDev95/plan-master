import { useEffect, useMemo, useState } from "react";
import { Icon } from "../shared/icons/Icons";

export const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const iconName = useMemo(() => (theme === "light" ? "Sun" : "Moon"), [theme]);
  const iconColor = useMemo(
    () => (theme === "light" ? "#474744" : "#FFF"),
    [theme]
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="header">
      <h1>Plan Master</h1>
      <button className="theme-toggle" onClick={toggleTheme}>
        <Icon name={iconName} size={32} color={iconColor} />
      </button>
    </header>
  );
};
