import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#eae5da] pt-16 pb-12 text-[#2b352d]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#f0ede6]">
          {/* Brand Info */}
          <div className="lg:col-span-4 max-w-sm">
            <Link href="/" className="inline-block mb-3" aria-label="NIRVAECO home">
              <Image
                src="/images/nirvaeco-logo.png"
                width={160}
                height={46}
                alt="NIRVAECO - by Nirvartaya Industries LLP"
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-xs text-[#637064] leading-relaxed max-w-xs font-normal">
              A Sustainable Packaging Brand by NIRVARTAYA INDUSTRIES LLP
            </p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1a201c] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link href="/" className="text-[#556254] hover:text-[#173826] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#556254] hover:text-[#173826] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-[#556254] hover:text-[#173826] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-[#556254] hover:text-[#173826] transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#556254] hover:text-[#173826] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1a201c] mb-4">
              Our Products
            </h3>
            <ul className="space-y-2.5 text-[13.5px]">
              <li>
                <Link
                  href="/products/three-compartment-clamshell-boxes"
                  className="text-[#556254] hover:text-[#173826] transition-colors"
                >
                  3-Compartment Clamshells
                </Link>
              </li>
              <li>
                <Link
                  href="/products/plain-clamshell-boxes"
                  className="text-[#556254] hover:text-[#173826] transition-colors"
                >
                  Plain Clamshells
                </Link>
              </li>
              <li>
                <Link
                  href="/products/molded-fiber-beverage-lids"
                  className="text-[#556254] hover:text-[#173826] transition-colors"
                >
                  Coffee Lids
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1a201c] mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-[13px] text-[#556254]">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#3e684a] shrink-0 mt-0.5" />
                <span>Plot H-3124, No. 15, GIDC, Ankleshwar, Gujarat 393002, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#3e684a] shrink-0" />
                <a href="tel:+919227111761" className="hover:text-[#173826] transition-colors">
                  +91 9227111761
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#3e684a] shrink-0" />
                <a href="mailto:info@nirvartayaind.com" className="hover:text-[#173826] transition-colors">
                  info@nirvartayaind.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#79887b]">
          <p>
            © {currentYear} Nirvartaya Industries LLP (Brand: NirvaEco). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-[#173826] transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link href="/terms-and-conditions" className="hover:text-[#173826] transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
