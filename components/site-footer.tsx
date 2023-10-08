import { Separator } from "./ui/separator";

export function SiteFooter() {
  return (
    <div>
      <Separator />
      <footer className="py-6">
        <div className="container flex flex-col items-center justify-between">
          <p className="text-center text-sm leading-loose text-muted-foreground">
            GitHub
          </p>
        </div>
      </footer>
    </div>
  );
}
