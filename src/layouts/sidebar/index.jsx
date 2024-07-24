import { Outlet } from "react-router-dom";
import { MobileSidebar } from "./_components/MobileSidebar";
import { NavbarAndSidebar } from "./_components/NavbarAndSidebar";

const Layout = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <NavbarAndSidebar />
      <div className="flex flex-col">
        <header className="sticky top-0 flex h-14 items-center gap-4 border-b bg-muted/80 backdrop-blur-sm px-4 lg:h-[60px] lg:px-6 z-50">
          <MobileSidebar />
          <div className="w-full flex-1">
            {/* Navbar content can be added here (note navItems are put in the sidebar) */}
          </div>
        </header>
        <main className="flex-grow p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;