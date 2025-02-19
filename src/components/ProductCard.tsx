import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartNotification from './CartNotification';

interface ProductCardProps {
  id: string;
  category: string;
  title: string;
  image: string;
  price: number;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, category, title, image, price, description }) => {
  const { dispatch } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id,
        title,
        price,
        image,
        quantity: 1
      }
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <>
      <CartNotification isVisible={showNotification} />
      <Link to={`/product/${category}/${id}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg group relative"
        >
          <div className="relative aspect-square overflow-hidden">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 z-10" />
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <button
                onClick={handleAddToCart}
                className="bg-amber-500 text-white p-3 rounded-full hover:bg-amber-600 transform hover:scale-110 transition-all"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
              <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transform hover:scale-110 transition-all">
                <Eye className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-serif font-semibold mb-2 text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{description}</p>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
              ))}
            </div>
            <p className="text-amber-500 font-bold text-lg">
              {price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
            </p>
          </div>
        </motion.div>
      </Link>
    </>
  );
};

export default ProductCard;