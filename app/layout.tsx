import "./globals.css";

import type { Metadata } from "next";

import { SidebarNav } from "@/components/sidebar-nav";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Next.js Admin Template",
  description: "Next.js Admin Template",
};

const sidebarNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Account",
    href: "/examples/forms/account",
  },
  {
    title: "Appearance",
    href: "/examples/forms/appearance",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-y-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen">
            <SiteHeader />
            <div className="container flex flex-col lg:flex-row lg:space-x-12 lg:py-4">
              <aside className="-mx-4 lg:w-1/5 overflow-auto">
                <SidebarNav items={sidebarNavItems} />
              </aside>
              <div className="flex-1">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
