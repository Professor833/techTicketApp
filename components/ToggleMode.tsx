"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {};
  }, []);

  if (!mounted) return <Button size="icon" variant="outline" disabled />;

  const dark = theme === "dark";
  const toggleTheme = () => {
    setTheme(dark ? "light" : "dark");
  };

  return (
    <Button onClick={toggleTheme} size="icon" variant="outline">
      {dark
        ? <Sun className="hover:cursor-pointer hover:text-primary" />
        : <Moon className="hover:cursor-pointer hover:text-primary" />}
    </Button>
  );
};

export default ToggleMode;
