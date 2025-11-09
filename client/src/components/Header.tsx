// --- MODIFICATION START ---
import { useState } from "react";
// --- MODIFICATION END ---
import { Link, useLocation } from "wouter";
// --- MODIFICATION START ---
import { Menu } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
// --- MODIFICATION END ---

export default function Header() {
  const [location] = useLocation();
  // --- MODIFICATION START ---
  // State to control the mobile menu's open/closed status
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // --- MODIFICATION END ---

  // 1. Define all possible nav items
  const allNavItems = [
    { href: "/", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "/about", label: "About" },
  ];

  // 2. Create a new filtered array based on the current location
  const navItems = allNavItems.filter((item) => {
    // If we are on the /about page...
    if (location === "/about") {
      // ...only keep items that are NOT 'Services' and NOT 'Projects'
      return item.label !== "Services" && item.label !== "Projects";
    }
    // Otherwise (on Home or any other page), keep all items
    return true;
  });


  // This function will handle the click
  const handleLogoClick = () => {
    // This forces the window to scroll to the top
    window.scrollTo(0, 0);
  };

  // --- MODIFICATION START ---
  // Helper function to close the mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  // --- MODIFICATION END ---

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        {/* Logo (now a button) */}
        <button 
          type="button"
          className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md px-3 py-2 -ml-3"
          onClick={handleLogoClick}
        >
          <img 
            src="/moniva.snap-logo.png" 
            alt="Moniva Snap Logo" 
            className="h-8 w-auto"
            data-testid="img-logo"
          />
          <span className="font-serif text-xl font-bold" data-testid="text-logo">
            Moniva Snap
          </span>
        </button>

        {/* Desktop Navigation (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            // const isActive = location === item.href || (item.href.startsWith('#') && location === '/');
            
            if (item.href.startsWith("#")) {
              return (
                <a key={item.href} href={item.href}>
                  <Button
                    variant="ghost"
                    className="hover-elevate active-elevate-2"
                    data-testid={`link-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Button>
                </a>
              );
            }
            
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

        {/* Desktop Contact Button (hidden on mobile) */}
        {/* --- MODIFICATION START --- */}
        <Link href="/contact" className="hidden md:inline-flex">
          <Button data-testid="button-contact">Contact Us</Button>
        </Link>
        {/* --- MODIFICATION END --- */}


        {/* --- MODIFICATION START --- */}
        {/* Mobile Menu (Hamburger Button & Sheet) */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                data-testid="button-mobile-menu"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              {/* Logo/Brand at top of mobile menu */}
              <div className="flex items-center gap-2 border-b pb-4">
                <img 
                  src="/moniva.snap-logo.png" 
                  alt="Moniva Snap Logo" 
                  className="h-8 w-auto" 
                />
                <span className="font-serif text-xl font-bold">
                  Moniva Snap
                </span>
              </div>
              
              {/* Mobile Navigation Links */}
              <nav className="flex flex-col gap-2 py-6">
                {navItems.map((item) => {
                  // Anchor link (e.g., #services)
                  if (item.href.startsWith("#")) {
                    return (
                      <a 
                        key={item.href} 
                        href={item.href} 
                        onClick={closeMobileMenu}
                      >
                        <Button 
                          variant="ghost" 
                          className="w-full justify-start gap-2"
                        >
                          {item.label}
                        </Button>
                      </a>
                    );
                  }
                  
                  // Page link (e.g., /about)
                  return (
                    <Link 
                      key={item.href} 
                      href={item.href} 
                      onClick={closeMobileMenu}
                    >
                      <Button 
                        variant="ghost" 
                        className="w-full justify-start gap-2"
                      >
                        {item.label}
                      </Button>
                    </Link>
                  );
                })}

                {/* Add Contact button to mobile menu */}
                <Link href="/contact" onClick={closeMobileMenu}>
                  <Button className="w-full" data-testid="button-contact-mobile">
                    Contact Us
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        {/* --- MODIFICATION END --- */}
        
      </div>
    </header>
  );
}