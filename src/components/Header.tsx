import React from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import { authOptions } from "../auth";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { MessagesSquare } from "lucide-react";
import CreateChatButton from "./CreateChatButton";
import UpgradeBanner from "./UpgradeBanner";

async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 p1-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />
        <div className="flex-1 flex items-center justify-end space-x-4">
          {/* TODO: Language Selection */}
          {/* TODO: Session Login */}
          {session ? (
            <>
              {/* TODO: This route will be redirect to this if session is true */}
              <Link href="/chat" prefetch={false}>
                <MessagesSquare className="text-black dark:text-white" />
              </Link>
              {/* TODO: CreateChatButton Component */}
              <CreateChatButton />
            </>
          ) : (
            <Link href="/pricing">Pricing</Link>
          )}
          {/* TODO: Darkmode Toggle */}
          <DarkModeToggle />
          {/* TODO: UserButton */}
          <UserButton session={session} />
        </div>
      </nav>
      {/* TODO: Upgrade banner */}
      <UpgradeBanner />
    </header>
  );
}

export default Header;
