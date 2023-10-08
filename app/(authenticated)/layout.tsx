import { SidebarNav } from "@/components/sidebar-nav";
import { SiteHeader } from "@/components/site-header";

const sidebarNavItems = [
  {
    title: "Home",
    href: "/admin",
  },
  {
    title: "Profile",
    href: "/admin/profile",
  },
  {
    title: "Notifications",
    href: "/admin/notifications",
  },
  {
    title: "Display",
    href: "/admin/display",
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <div className="container flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 lg:py-8">
        <aside className="-mx-4 overflow-auto pt-4 lg:w-1/5 lg:pt-0">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
}
