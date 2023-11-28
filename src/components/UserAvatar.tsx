import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

//TODO: UserAvatar Component for Header
//TODO: UserAvatar placing inside the UserButton components
//TODO: Using Avatar components from shadcn
function UserAvatar() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
