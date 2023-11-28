//TODO: cn component allow customisable
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

//TODO: UserAvatar Component for Header
//TODO: UserAvatar placing inside the UserButton components
//TODO: Using Avatar components from shadcn
//TODO: Add customisable component into the UserAvatar using cd lib
function UserAvatar({
  name,
  image,
  className,
}: {
  name: string;
  image: string;
  className?: string;
}) {
  return (
    <Avatar className={cn("bg-white text-black", className)}>
      {/* Conditional rendering if image is truthy then it render Image component */}
      {image && (
        <Image
          src={image}
          width={40}
          height={40}
          alt={name}
          className="rounded-full"
        />
      )}
      {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
      <AvatarFallback delayMs={1000} className="dark: bg-white dark:text-black text-lg">
        {/* TODO: Take each of first char of each first and second name */}
        {/* TODO: Merge first char of each first and second name */}
        {name
          ?.split(" ")
          .map((n) => n[0])
          .join("")}
      </AvatarFallback>
    </Avatar>
  );
}

export default UserAvatar;
