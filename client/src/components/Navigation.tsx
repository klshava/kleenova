import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/why-choose-us", label: "Why Choose Us" },
    { href: "/reviews", label: "Reviews" },
    { href: "/faqs", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663485367245/PNY4nN5CYdEgij5Y6N7MdC/kleenova-logo-VQSLsxF96pTbfZ7uQp9wed.webp"
                alt="Kleenova Logo"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-primary hidden sm:inline">
                Kleenova
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="text-foreground hover:text-primary transition-colors duration-200 font-medium">
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:0480536701"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-5 w-5" />
              <span className="text-sm font-medium">0480 536 701</span>
            </a>
            <Link href="/booking">
              <Button className="bg-primary hover:bg-primary-dark text-white">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-2 py-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a
                    className="block px-4 py-2 text-foreground hover:bg-secondary rounded-md transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </Link>
              ))}
              <div className="px-4 py-2 border-t border-border mt-2">
                <a
                  href="tel:0480536701"
                  className="flex items-center gap-2 text-foreground hover:text-primary mb-3"
                >
                  <Phone className="h-5 w-5" />
                  <span className="text-sm font-medium">0480 536 701</span>
                </a>
                <Link href="/booking">
                  <Button
                    className="w-full bg-primary hover:bg-primary-dark text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
