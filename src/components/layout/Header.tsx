import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Youtube,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png'; // Update the path if needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', nepali: 'गृहपृष्ठ' },
    { name: 'About Us', path: '/about', nepali: 'हाम्रो बारेमा' },
    { name: 'Board Members', path: '/board-members', nepali: 'कार्यसमिति' },
    { name: 'Staff', path: '/staff', nepali: 'कर्मचारी' },
    { name: 'Notices', path: '/notices', nepali: 'सूचना' },
    { name: 'Gallery', path: '/gallery', nepali: 'ग्यालेरी' },
    { name: 'Contact', path: '/contact', nepali: 'सम्पर्क' },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-teal-800 text-teal-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex items-center gap-4 mb-2 sm:mb-0">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>Rajabari Devdaha-1, Rupandehi, Nepal</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>+977-71-22222</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail className="w-4 h-4" />
                <span>kerwanikhanepani@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/kerwanikhanepani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@KerwaniKhanepani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 pt-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Head pad image */}
          <Link
            to="/"
            className="flex items-center gap-2 px-2 py-2 w-full lg:max-w-full"
          >
            {/* Logo Image */}
            <div className="flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="w-14 h-14 object-contain"
              />
            </div>

            {/* Organization Titles */}
            <div className="flex flex-col flex-1 truncate">
              <h1
                className="text-sm sm:text-base lg:text-lg font-bold text-teal-900 tracking-tight truncate"
                style={{
                  fontFamily: '"Mukta", sans-serif',
                  fontWeight: 900,
                }}
              >
                केरवानी खानेपानी उपभोक्ता तथा सरसफाई संस्था
              </h1>
              <p
                className="text-xs sm:text-sm lg:text-base font-bold text-teal-600 tracking-tight truncate"
                style={{
                  fontFamily: '"Roboto Condensed", "Roboto", sans-serif',
                  fontWeight: 900,
                }}
              >
                KERWANI WATER SUPPLY CONSUMERS & SANITATION ASSOCIATION
              </p>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 pt-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md transition-all duration-300 font-medium ${
                  isActivePath(item.path)
                    ? 'bg-teal-700 text-white shadow-sm'
                    : 'text-gray-700 hover:text-teal-700 hover:bg-teal-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="ml-2 bg-teal-700 text-white hover:bg-teal-800">
              <Link to="/tap-installation-form">नयाँ जडान आवेदन</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden self-end text-gray-800 hover:text-teal-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-md transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'bg-teal-700 text-white'
                      : 'text-gray-800 hover:text-teal-700 hover:bg-teal-100'
                  }`}
                >
                  <div>
                    <div className="font-medium">{item.name}</div>
                    <div className="text-sm opacity-70">{item.nepali}</div>
                  </div>
                </Link>
              ))}
              <Button asChild className="mt-4 bg-teal-700 text-white hover:bg-teal-800">
                <Link to="/tap-installation-form" onClick={() => setIsMenuOpen(false)}>
                  नयाँ जडान आवेदन
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
