import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Home</h3>
        <p className="text-sm text-muted-foreground">This is the home page.</p>
      </div>
      <Separator />
    </main>
  );
}
