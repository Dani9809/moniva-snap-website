import { Link, useLocation } from "wouter";
// The Code2 import is no longer needed
// import { Code2 } from "lucide-react"; 
import { Button } from "@/components/ui/button";

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
  ];

  // This function will handle the click
  const handleLogoClick = () => {
    // This forces the window to scroll to the top
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link 
          href="/" 
          className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3"
          // Add the onClick handler here
          onClick={handleLogoClick}
        >
          {/* REPLACED: The Code2 icon is replaced with your new logo.
            It assumes you moved your file to /client/public/logo.png
          */}
          <img 
            src="/moniva.snap-logo.png" 
            alt="Moniva Snap Logo" 
            className="h-8 w-auto" // You can adjust the height (h-8) as needed
            data-testid="img-logo"
          />
          <span className="font-serif text-xl font-bold" data-testid="text-logo">
            Moniva Snap
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location === item.href || (item.href.startsWith('#') && location === '/');
            
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className="hover-elevate active-elevate-2"
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        <Link href="/contact">
          <Button data-testid="button-contact">Contact Us</Button>
        </Link>
      </div>
    </header>
  );
}