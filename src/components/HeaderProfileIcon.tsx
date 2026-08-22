import React from "react";
import { ThemeToggle } from "./ThemeToggle";

export function HeaderProfileIcon() {
  return (
    <div className="flex items-center space-x-2">
      <ThemeToggle />
    </div>
  );
}
