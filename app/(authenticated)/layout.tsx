import { SidebarNav } from "@/components/sidebar-nav";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sidebarNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Profile",
    href: "/profile",
  },
  {
    title: "Notifications",
    href: "/notifications",
  },
  {
    title: "Display",
    href: "/display",
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col space-y-4">
      <SiteHeader />
      <div className="container flex flex-1 flex-col space-y-4 pb-2 lg:flex-row lg:space-x-12 lg:space-y-0 lg:py-8">
        <aside className="-mx-2 overflow-auto lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
      <SiteFooter />
    </div>
  );
}
