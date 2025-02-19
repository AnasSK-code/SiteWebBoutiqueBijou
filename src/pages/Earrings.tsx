import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';  // On réutilise ProductCard
import { getProductsByCategory } from '../data/products';  // Récupérer les produits par catégorie

const Earrings: React.FC = () => {
  // Récupérer les produits de la catégorie "earrings"
  const earrings = getProductsByCategory('earrings');

  return (
    <div className="pt-24 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-serif font-bold text-center mb-12 text-gray-900 dark:text-white">
          Nos Boucles d'Oreilles
        </h1>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {earrings.map((earring) => (
            <ProductCard
              key={earring.id}
              {...earring}
              category="earrings"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Earrings;
