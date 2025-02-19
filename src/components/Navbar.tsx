import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './image/logo.png';
import { useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-16 w-17" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-amber-500 hover:text-amber-500 transition-colors">
              Accueil
            </Link>
            <Link to="/rings" className="text-amber-500 hover:text-amber-500 transition-colors">
              Bagues
            </Link>
            <Link to="/necklaces" className="text-amber-500 hover:text-amber-500 transition-colors">
              Colliers
            </Link>
            <Link to="/watches" className="text-amber-500 hover:text-amber-500 transition-colors">
              Montres
            </Link>
            <Link to="/earrings" className="text-amber-500 hover:text-amber-500 transition-colors">
              Boucles
            </Link>
          </div>

          
          <div className="flex items-center space-x-6">
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full bg-white/10 border border-gray-600 focus:border-amber-500 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <Link to="/cart" className="text-gray-500 hover:text-amber-500 transition-colors">
              <ShoppingCart className="h-6 w-6" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-500 hover:text-amber-500"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-white/10 border border-gray-600 focus:border-amber-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <Link to="/" className="block text-amber-500 hover:text-amber-500 py-2">
                Accueil
              </Link>
              <Link to="/rings" className="block text-amber-500 hover:text-amber-500 py-2">
                Bagues
              </Link>
              <Link to="/necklaces" className="block text-amber-500 hover:text-amber-500 py-2">
                Colliers
              </Link>
              <Link to="/watches" className="block text-amber-500 hover:text-amber-500 py-2">
                Montres
              </Link>
              <Link to="/earrings" className="block text-amber-500 hover:text-amber-500 py-2">
                Boucles
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
