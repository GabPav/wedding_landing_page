import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main grid container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are passionate wedding photographers dedicated to capturing your
              most precious moments. Let us help you create timeless memories that
              will last forever.
            </p>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#gallery" className="hover:underline">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:underline">
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>Email: info@weddingphotos.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: 123 Wedding Lane, Cityville</li>
            </ul>
          </div>
        </div>
        {/* Bottom copyright section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} Wedding Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
