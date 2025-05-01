
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Car, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { name: "Home", path: "/" },
    { name: "Cars", path: "/cars" },
    { name: "Book Now", path: "/book" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-rental-navy" />
              <span className="text-xl font-bold text-rental-navy">Krunal Car Rental</span>
            </NavLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-4">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-rental-red font-medium"
                      : "text-rental-navy hover:text-rental-red transition"
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
            <NavLink to="/admin">
              <Button className="bg-rental-navy hover:bg-blue-800 ml-4">
                Admin Login
              </Button>
            </NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-rental-navy hover:text-rental-red focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 text-rental-red font-medium"
                    : "block px-3 py-2 text-rental-navy hover:text-rental-red transition"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </NavLink>
            ))}
            <NavLink
              to="/admin"
              className="block px-3 py-2 mt-4 text-center text-white bg-rental-navy rounded hover:bg-blue-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Admin Login
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
