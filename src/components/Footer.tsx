import React from 'react';
import { Link } from 'react-router-dom';
import {Phone, MapPin,Paperclip} from 'lucide-react';
import logo from './image/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-16 w-17" />
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Sk Excellence</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              L'excellence dans chaque bijou, la perfection dans chaque détail.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">En savoir plus</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-amber-500">
                  À propos de nous
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-amber-500">
                  Nous contacter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Contact</h3>
            <ul className="space-y-2">
            <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Paperclip className="h-5 w-5 mr-2" />
                contact@SK.com
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                +33 1 23 45 67 89
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                Paris, France
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Newsletter</h3>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="mt-2 w-full bg-amber-500 text-white px-4 py-2 rounded-md hover:bg-amber-600 transition-colors">
                S'abonner
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Sk Excellence. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;