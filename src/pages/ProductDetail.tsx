import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingCart, ArrowLeft, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/products';
import CartNotification from '../components/CartNotification';

const ProductDetail: React.FC = () => {
  const { category, id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [showNotification, setShowNotification] = useState(false);
  
  const product = getProductById(category!, id!);
  
  if (!product) {
    return (
      <div className="pt-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-serif">Produit non trouvé</h1>
          <button 
            onClick={() => navigate(-1)}
            className="mt-4 text-amber-500 hover:text-amber-600"
          >
            Retour
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1
      }
    });
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  return (
    <>
      <CartNotification isVisible={showNotification} />
      <div className="pt-32 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-amber-500 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative group"
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                {product.title}
              </h1>

              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 dark:text-gray-400">
                  (12 avis)
                </span>
              </div>

              <p className="text-3xl font-bold text-amber-500 mb-6">
                {product.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
              </p>

              <div className="prose prose-lg text-gray-600 dark:text-gray-400 mb-8">
                <p>{product.description}</p>
                <ul className="mt-4 space-y-2">
                  {product.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4 mt-auto">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 group"
                >
                  <ShoppingCart className="h-5 w-5 transform group-hover:scale-110 transition-transform" />
                  <span>Ajouter au panier</span>
                </button>
                <button className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-amber-500 dark:hover:border-amber-500 transition-colors">
                  <Heart className="h-6 w-6 text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-amber-500" />
                </button>
              </div>

              <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                <h3 className="font-serif text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Détails du produit
                </h3>
                <dl className="space-y-4">
                  <div className="flex">
                    <dt className="w-1/3 text-gray-600 dark:text-gray-400">Matériau</dt>
                    <dd className="w-2/3 text-gray-900 dark:text-white">{product.material}</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-1/3 text-gray-600 dark:text-gray-400">Poids</dt>
                    <dd className="w-2/3 text-gray-900 dark:text-white">{product.weight}</dd>
                  </div>
                  <div className="flex">
                    <dt className="w-1/3 text-gray-600 dark:text-gray-400">Certification</dt>
                    <dd className="w-2/3 text-gray-900 dark:text-white">{product.certification}</dd>
                  </div>
                </dl>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;