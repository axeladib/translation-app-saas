import React from "react";
import LogoImage from "@logos/chat.svg";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
      <div className="flex items-center w-32 h-32">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={LogoImage}
            alt="Logo"
            width={100}
            height={150}
            className="dark:filter dark:invert "
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
