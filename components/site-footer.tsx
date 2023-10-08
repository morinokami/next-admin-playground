import Link from "next/link";

import { Icons } from "./icons";
import { Separator } from "./ui/separator";

export function SiteFooter() {
  return (
    <div>
      <Separator />
      <footer className="py-6">
        <div className="container flex flex-col items-center justify-between">
          <Link href="">
            <Icons.gitHub className="h-6 w-6" />
          </Link>
        </div>
      </footer>
    </div>
  );
}
