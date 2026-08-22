import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, LayoutGrid, Phone, ShoppingBag, User } from "lucide-react";
import { cn, trackEvent } from "../lib/utils";
import { Button } from "./ui/button";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { label: "Home", icon: Home, path: "/" },
    { label: "Services", icon: LayoutGrid, path: "/services" },
    { label: "Meet CEO", icon: User, path: "/meet-ceo" },
    { label: "Contact", icon: Phone, path: "/contact" },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc] font-sans text-text-primary overflow-x-hidden pb-20">
      <main className="flex-1 pb-16">
        <Outlet />
        
        {/* Geometric Footer */}
        <footer className="h-auto min-h-[4rem] bg-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between px-6 sm:px-12 py-6 text-[10px] tracking-widest font-bold uppercase shrink-0 pb-40">
          <div className="flex gap-4 sm:gap-8 mb-4 sm:mb-0 text-center flex-wrap justify-center">
            <Link to="/privacy" className="hover:text-indigo-300">Privacy</Link>
            <Link to="/terms" className="hover:text-indigo-300">Terms</Link>
            <Link to="/acceptable-use" className="hover:text-indigo-300">Acceptable Use</Link>
          </div>
          <div className="text-center opacity-80">
            Shop4Me &copy; {new Date().getFullYear()} • Not Just Shopping. Errand Assistance.
          </div>
        </footer>
      </main>

      {/* Sticky Bottom CTA for Mobile */}
      {location.pathname !== "/request" && (
        <div className="fixed bottom-16 left-0 right-0 z-40 p-4 sm:hidden">
          <Link to="/request" onClick={() => trackEvent("shop_for_me_click", { location: "sticky_cta" })}>
            <Button size="lg" fullWidth className="shadow-lg shadow-indigo-600/20 text-lg">
              <ShoppingBag className="mr-2 h-5 w-5" />
              SHOP FOR ME
            </Button>
          </Link>
        </div>
      )}

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background pb-safe">
        <div className="mx-auto flex h-16 max-w-md items-center justify-between px-2 sm:px-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-1 flex-col items-center justify-center space-y-1 py-2 transition-colors",
                  isActive ? "text-primary opacity-100" : "text-text-secondary hover:text-primary opacity-40 hover:opacity-100"
                )}
              >
                <item.icon className={cn("h-6 w-6", isActive && "fill-indigo-50")} />
                <span className="text-[10px] font-bold text-center whitespace-nowrap">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
