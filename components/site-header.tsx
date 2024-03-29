import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import { UserNav } from "./user-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-14 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Image
          src="/next.svg"
          alt="Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <UserNav />
          </nav>
        </div>
      </div>
      <Separator />
    </header>
  );
}
