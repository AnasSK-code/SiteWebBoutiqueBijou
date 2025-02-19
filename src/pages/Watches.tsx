import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';  // On utilise le même composant ProductCard
import { getProductsByCategory } from '../data/products';  // Récupérer les produits par catégorie

const Watches: React.FC = () => {
  // Récupérer les produits de la catégorie "watches"
  const watches = getProductsByCategory('watches');

  return (
    <div className="pt-24 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-serif font-bold text-center mb-12 text-gray-900 dark:text-white">
          Nos Montres de Luxe
        </h1>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {watches.map((watch) => (
            <ProductCard
              key={watch.id}
              {...watch}
              category="watches"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Watches;
