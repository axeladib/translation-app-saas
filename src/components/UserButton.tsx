"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signIn,signOut } from "next-auth/react";

//  TODO: User profile
function UserButton({ session }: { session: Session | null }) {
  // TODO:  Create session for authentication with NextAuth
  // ...Session
  //TODO: If the user Session is not exist rendering the SignIn Google button
  //TODO: Use the shadcn button component
  if (!session) {
    return (
      <Button variant={"outline"} onClick={() => signIn()}>
        Sign In
      </Button>
    );
  }
 //TODO: If session exist then render this
  return (
    session && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          {/* TODO: Apply the UserAvatar here */}
          <UserAvatar
            name={session.user?.name}
            image={session.user?.image}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem> */}
          <DropdownMenuItem onClick={()=> signOut()}>Sign Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}

export default UserButton;
