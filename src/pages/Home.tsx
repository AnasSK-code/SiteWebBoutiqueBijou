import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import back from '../components/image/back.webp';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative min-h-screen flex items-center justify-center"
      >
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage:  `url(${back})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-white/10" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl font-bold mb-8 text-gray-800 text-shadow-lg"
          >
           Sk Excellence
          </motion.h1>
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-3xl mb-12 text-gray-700 text-shadow-lg font-light"
          >
            L'art de la joaillerie à son apogée
          </motion.p>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to="/rings"
              className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 px-12 py-4 rounded-full text-lg font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-amber-500/20"
            >
              Découvrir nos collections
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="h-8 w-8 text-amber-500" />
        </motion.div>
      </motion.section>

      {/* Featured Products */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800"
          >
            Nos Pièces <span className="text-amber-500">Exceptionnelles</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[{ 
              title: "Bague Diamant Éternel", 
              image: "https://www.i-diamants.com/medias_upload/moxie/solitaire-diamant-or-blanc/solitaire-diamant-or-blanc.jpg", 
              price: "3,500 €", 
              link: "/rings" 
            }, { 
              title: "Collier Saphir Royal", 
              image: "https://www.bijouterieballanger.fr/cdn/shop/products/colliersaphirtaillepoiresurmonted_unebarrettede5diamants.jpg?v=1670082653&width=1946", 
              price: "4,200 €", 
              link: "/necklaces" 
            }, { 
              title: "Montre Or Rose", 
              image: "https://cdn.brandfield.fr/media/catalog/product/cache/2148b6ececc229623c3ab7d3f3406f16/4/0/4051432966279_1_5jj8zcrcmfy8svnu.jpg", 
              price: "8,900 €", 
              link: "/watches" 
            }].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={product.link} className="block">
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 z-10" />
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="font-serif text-2xl mb-2">{product.title}</h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-amber-500 fill-current" />
                        ))}
                      </div>
                      <p className="text-amber-500 font-bold text-xl">{product.price}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-800 opacity-80" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-white">
              L'Excellence dans <span className="text-amber-500">chaque détail</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              Depuis notre création, nous nous engageons à créer des pièces d'exception
              qui transcendent les tendances. Chaque bijou est une œuvre d'art,
              façonné avec passion par nos maîtres artisans.
            </p>
            <Link
              to="/about"
              className="inline-block bg-transparent border-2 border-amber-500 text-amber-500 px-8 py-3 rounded-full hover:bg-amber-500 hover:text-white transition-colors duration-300"
            >
              Découvrir notre histoire
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
