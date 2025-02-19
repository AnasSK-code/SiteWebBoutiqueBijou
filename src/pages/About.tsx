import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, Heart } from 'lucide-react';
import aboutimage from '../components/image/aboutimage.png';

const About: React.FC = () => {
  return (
    <div className="pt-24 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          À Propos de Sk Excellence
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src={aboutimage}
              alt="Atelier de joaillerie"
              className="w-full h-98 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Notre Histoire
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Fondée en 2010, Sk Excellence incarne l'alliance parfaite entre tradition joaillière
              et innovation contemporaine. Notre maison se distingue par son engagement envers
              l'excellence artisanale et sa quête perpétuelle de la perfection.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Chaque création qui sort de nos ateliers est le fruit d'un savoir-faire transmis
              de génération en génération, enrichi par les techniques les plus modernes de la joaillerie.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Award className="h-12 w-12 text-amber-500" />,
              title: "Excellence",
              description: "Nous ne créons que des pièces d'exception"
            },
            {
              icon: <Shield className="h-12 w-12 text-amber-500" />,
              title: "Qualité",
              description: "Matériaux précieux rigoureusement sélectionnés"
            },
            {
              icon: <Heart className="h-12 w-12 text-amber-500" />,
              title: "Passion",
              description: "L'amour du métier dans chaque création"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;