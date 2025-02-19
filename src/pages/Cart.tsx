import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity }
    });
  };

  const handleRemoveItem = (id: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    });
  };

  return (
    <div className="pt-24 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center mb-12">
          <ShoppingCart className="h-8 w-8 text-amber-500 mr-4" />
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
            Votre Panier
          </h1>
        </div>

        {state.items.length > 0 ? (
          <>
            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              {state.items.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="p-6 border-b border-gray-200 dark:border-gray-800 flex items-center"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="ml-6 flex-grow">
                    <h3 className="text-lg font-serif font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-amber-500 font-bold">
                      {item.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <Minus className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </button>
                      <span className="w-8 text-center text-gray-900 dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <Plus className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
              <div className="flex justify-between mb-4">
                <span className="text-gray-600 dark:text-gray-400">Sous-total</span>
                <span className="text-gray-900 dark:text-white font-semibold">
                  {state.total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600 dark:text-gray-400">Livraison</span>
                <span className="text-gray-900 dark:text-white font-semibold">Gratuite</span>
              </div>
              <div className="flex justify-between mb-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
                <span className="text-lg font-bold text-amber-500">
                  {state.total.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                </span>
              </div>
              <button className="w-full bg-gradient-gold text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity mt-4 font-semibold">
                Procéder au paiement
              </button>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              Votre panier est vide
            </p>
            <Link
              to="/"
              className="inline-block bg-gradient-gold text-white px-8 py-3 rounded-md hover:opacity-90 transition-opacity"
            >
              Découvrir nos produits
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Cart;