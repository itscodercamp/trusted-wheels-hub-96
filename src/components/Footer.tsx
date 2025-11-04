import { Shield, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-automotive-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img src="/brand-logo.png" alt="TrustedVehicles Logo" loading="lazy" decoding="async" className="w-8 h-8 object-contain rounded-md" /> {/* Added brand logo */}
              <span className="text-xl font-bold">TrustedVehicles</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's most trusted car inspection and selling platform. 
              Building trust in every vehicle transaction.
            </p>
            
            <div className="flex space-x-4">
              <a href="https://facebook.com/trustedvehicles" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-trust-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-trust-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/trustedvehicles" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-trust-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/trustedvehicles" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-trust-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-gray-300 hover:text-trust-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-trust-400 transition-colors">Our Services</a></li>
              <li><a href="/gallery" className="text-gray-300 hover:text-trust-400 transition-colors">Car Gallery</a></li>
              <li><a href="/team" className="text-gray-300 hover:text-trust-400 transition-colors">Our Team</a></li>
              <li><a href="/faqs" className="text-gray-300 hover:text-trust-400 transition-colors">FAQs</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-trust-400 transition-colors">Contact Us</a></li>
              <li><a href="https://ims.trustedvehicles.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-trust-400 transition-colors">IMS Portal</a></li>
              <li><a href="https://marketplace.trustedvehicles.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-trust-400 transition-colors">Marketplace</a></li>
              <li><a href="https://blog.trustedvehicles.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-trust-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="/book-inspection" className="text-gray-300 hover:text-trust-400 transition-colors">Car Inspection</a></li>
              <li><a href="/sell-request" className="text-gray-300 hover:text-trust-400 transition-colors">Sell Your Car</a></li>
              <li><a href="/car-valuation" className="text-gray-300 hover:text-trust-400 transition-colors">IMS for Dealers</a></li>
              <li>
                <span className="text-gray-500 cursor-not-allowed flex items-center">
                  Vehicle History <span className="ml-2 text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">Soon</span>
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed flex items-center">
                  Legal Assistance <span className="ml-2 text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">Soon</span>
                </span>
              </li>
              <li>
                <span className="text-gray-500 cursor-not-allowed flex items-center">
                  D2D Transfers <span className="ml-2 text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">Soon</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-trust-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Nagpur, Maharashtra</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-trust-400 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-trust-400 flex-shrink-0" />
                <span className="text-gray-300">support@trustedvehicles.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} TrustedVehicles. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a href="/terms" className="text-gray-400 hover:text-trust-400 transition-colors">Terms & Conditions</a>
              <a href="/privacy" className="text-gray-400 hover:text-trust-400 transition-colors">Privacy Policy</a>
              <a href="/cookie-policy" className="text-gray-400 hover:text-trust-400 transition-colors">Cookie Policy</a> {/* Updated link */}
              <a href="/disclaimer" className="text-gray-400 hover:text-trust-400 transition-colors">Disclaimer</a> {/* Updated link */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;