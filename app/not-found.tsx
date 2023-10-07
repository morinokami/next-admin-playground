import Link from "next/link";

import { Separator } from "@/components/ui/separator";

export default function NotFound() {
  return (
    <main className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Not Found</h3>
        <p className="text-sm text-muted-foreground">
          Could not find requested resource.
        </p>
      </div>
      <Separator />
      <div>
        <Link href="/">Return to Home</Link>
      </div>
    </main>
  );
}
