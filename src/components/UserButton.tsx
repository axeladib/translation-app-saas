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
import { signIn, signOut } from "next-auth/react";
import { useSubscriptionStore } from "@/store/store";
import LoadingSpinner from "./LoadingSpinner";
import { StarIcon } from "lucide-react";
import ManageAccountButton from "./ManageAccountButton";

//  TODO: User profile
function UserButton({ session }: { session: Session | null }) {
  // Listen to Stripe Subscription
  const subscription = useSubscriptionStore((state) => state.subscription);
  // FIXME: Check user have subcription
  console.log(`Output Role ${subscription?.id}`);
  console.log(`Output Items ${subscription?.role}`);
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
          <UserAvatar name={session.user?.name} image={session.user?.image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{session.user?.name}</DropdownMenuLabel>
          <DropdownMenuSeparator />

          {/* TODO: Render loadingSpinner when subcription is undefined */}
          {subscription === undefined && (
            <DropdownMenuItem>
              <LoadingSpinner />
            </DropdownMenuItem>
          )}
          {/* TODO: Render StartIcon for pro member */}

          {subscription?.role === "pro" && (
            <>
              <DropdownMenuLabel className="text-xs flex items-center justify-centerspace-x-1 text=[#E935C1] animate-pulse">
                <StarIcon fill="#E935C1" />
                <p>PRO</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <ManageAccountButton />
              </DropdownMenuItem>
            </>
          )}
          {/* TODO: Render also manage account button */}
          <DropdownMenuItem onClick={() => signOut()}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}

export default UserButton;
