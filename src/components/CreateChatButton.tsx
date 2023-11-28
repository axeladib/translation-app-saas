"use client";

import React from "react";
import { Button } from "./ui/button";
import { MessageSquarePlus } from "lucide-react";
import { useRouter } from "next/navigation";

function CreateChatButton() {
  //TODO: Redirect to other URL of the individual chat
  //TODO: Setup the router using useRouter next navigation
  const router = useRouter();
  const createNewChat = async () => {
    //TODO: All the logic here...
    //redirect to the router
    router.push("/chat/abc");
  };

  return (
    <Button onClick={() => createNewChat()} variant={"ghost"}>
      <MessageSquarePlus />
    </Button>
  );
}

export default CreateChatButton;
