import React from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-500">
      <nav className="flex flex-col sm:flex-row items-center p-5 p1-2 bg-white dark:bg-gray-500 max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* TODO: Language Selection */}
          {/* TODO: Session Login */}

          {/* TODO: Darkmode Toggle */}
          <DarkModeToggle/>
          {/* TODO: UserButton */}
          <UserButton/>
        </div>
        {/* TODO: Upgrade banner */}
      </nav>
    </header>
  );
}

export default Header;
