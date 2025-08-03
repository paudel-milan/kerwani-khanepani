import { Link } from 'react-router-dom';
import { Facebook, Youtube, Phone, Mail, MapPin, Clock } from 'lucide-react';
import logo from '@/assets/logo.png'; // Update the path if needed

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-teal-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Kerwani Khanepani" className="w-12 h-12" />
              <div>
                <h3 className="font-bold text-lg">केरवानी खानेपानी</h3>
                <p className="text-sm opacity-90">उपभोक्ता तथा सरसफाई संस्था</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Providing reliable and clean drinking water services to the residents of 
              Kerwani, committed to community health and water management.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/kerwanikhanepani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-teal-800/50 rounded-full hover:bg-teal-800/80 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@KerwaniKhanepani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-teal-800/50 rounded-full hover:bg-teal-800/80 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                About Us
              </Link>
              <Link to="/board-members" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Board Members
              </Link>
              <Link to="/staff" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Staff
              </Link>
              <Link to="/notices" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Notices
              </Link>
              <Link to="/gallery" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                Gallery
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Services</h3>
            <div className="space-y-2">
              <Link to="/tap-installation-form" className="block text-sm opacity-90 hover:opacity-100 transition-opacity">
                New Connection
              </Link>
              <span className="block text-sm opacity-90">Water Supply</span>
              <span className="block text-sm opacity-90">Maintenance & Repair</span>
              <span className="block text-sm opacity-90">Customer Support</span>
              <span className="block text-sm opacity-90">Bill Payment</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>Kerwani, Rupandehi</p>
                  <p>Lumbini Province, Nepal</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>+977-71-22222</p> {/* Replace with actual */}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>kerwanikhanepani@gmail.com</p> {/* Replace with actual */}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <div className="text-sm opacity-90">
                  <p>Sunday - Friday</p>
                  <p>10:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-teal-800 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 केरवानी खानेपानी उपभोक्ता तथा सरसफाई संस्था. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
