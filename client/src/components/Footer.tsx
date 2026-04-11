import { Link } from "wouter";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-poppins">Kleenova</h3>
            <p className="text-gray-300 text-sm mb-4">
              Premium cleaning services in Western Australia. Professional, reliable, and affordable.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="hover:text-primary transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-primary transition-colors">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-primary transition-colors">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/booking">
                  <a className="hover:text-primary transition-colors">Book Now</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  End of Lease Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Commercial Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Regular Cleaning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Deep Cleaning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 font-poppins">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:0480536701"
                  className="hover:text-primary transition-colors"
                >
                  0480 536 701
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:ngonidzashetutayi@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  ngonidzashetutayi@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Western Australia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
            <div>
              <p>&copy; 2026 Kleenova. All rights reserved.</p>
            </div>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="/privacy">
                <a className="hover:text-primary transition-colors">Privacy Policy</a>
              </Link>
              <Link href="/terms">
                <a className="hover:text-primary transition-colors">Terms & Conditions</a>
              </Link>
            </div>
            <div className="text-right md:text-left">
              <p>ABN: 28 695 077 135</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
