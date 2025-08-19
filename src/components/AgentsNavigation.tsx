import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useLocation } from "react-router-dom";

const AgentsNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: "About", href: "#about", onClick: () => scrollToSection('about') },
    { name: "Work", href: "#work", onClick: () => scrollToSection('work') },
    { name: "Services", href: "#services", onClick: () => scrollToSection('services') },
    { name: "Contact", href: "#contact", onClick: () => scrollToSection('contact') },
  ];

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled 
          ? "w-[90%] max-w-4xl glass glass-hover rounded-2xl h-16" 
          : "w-[95%] max-w-5xl bg-black/20 backdrop-blur-sm rounded-3xl h-20"
      }`}
    >
      <div className="mx-auto h-full px-8">
        <nav className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center gap-3">
            <span className="font-playfair text-xl font-medium">Agents & Scouts</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) {
                    item.onClick();
                  }
                }}
                className="link-elegant text-sm text-muted-foreground hover:text-foreground font-medium tracking-wide uppercase"
              >
                {item.name}
              </a>
            ))}
            <Button 
              onClick={() => window.open('mailto:hello@agentsandscouts.com', '_blank')}
              className="button-luxury text-sm tracking-wide uppercase"
            >
              Let's Talk
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black/95 backdrop-blur-xl border-elegant-border">
                <div className="flex flex-col gap-6 mt-12">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg text-muted-foreground hover:text-foreground transition-colors font-medium tracking-wide"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsMobileMenuOpen(false);
                        if (item.onClick) {
                          item.onClick();
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Button 
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.open('mailto:hello@agentsandscouts.com', '_blank');
                    }}
                    className="button-luxury mt-6"
                  >
                    Let's Talk
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default AgentsNavigation;