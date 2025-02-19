import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

interface CartNotificationProps {
  isVisible: boolean;
}

const CartNotification: React.FC<CartNotificationProps> = ({ isVisible }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 left-20 transform -translate-x-1/2 z-50" // Centrage horizontal, juste en dessous de la navbar
        >
          <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
            <Check className="h-5 w-5 mr-2" />
            <span>Produit ajouté au panier</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartNotification;
