import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser'; 
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false); // Ajout d'un état pour gérer le chargement

  // Gérer les changements dans le formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Envoyer le formulaire avec EmailJS
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Active le loader

    // Validation basique
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Veuillez remplir tous les champs.');
      setLoading(false);
      return;
    }

    // Paramètres d'EmailJS
    const serviceID = ''; // Remplace par ton Service ID
    const templateID = ''; // Remplace par ton Template ID
    const userID = ''; // Remplace par ton User ID EmailJS

    // Correspondance avec les variables définies dans le template EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
    .then((response) => {
      console.log("Message envoyé avec succès !", response);
      setStatus("Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" });
    })
    .catch((error) => {
      console.error("Erreur lors de l'envoi :", error);
      setStatus("Erreur lors de l'envoi du message.");
    })
    .finally(() => {
      setLoading(false);
    });
  
  };

  return (
    <div className="pt-24 px-4 min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Contactez-nous
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Envoyez-nous un message
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors"
                disabled={loading}
              >
                {loading ? 'Envoi en cours...' : 'Envoyer'}
              </button>
            </form>
            {status && <p className="mt-4 text-center text-gray-600 dark:text-gray-400">{status}</p>}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            {/* Autres informations de contact */}
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Nos Coordonnées
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-amber-500 mr-3" />
                  <span className="text-gray-600 dark:text-gray-400">
                    123 Avenue des Champs-Élysées, 75008 Paris
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-amber-500 mr-3" />
                  <span className="text-gray-600 dark:text-gray-400">
                    +33 1 23 45 67 89
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-amber-500 mr-3" />
                  <span className="text-gray-600 dark:text-gray-400">
                    contact@SK.com
                  </span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-amber-500 mr-3" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Lun - Sam: 10h00 - 19h00
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                Rendez-vous Privé
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Pour une expérience personnalisée, nous vous invitons à prendre
                rendez-vous dans notre salon privé.
              </p>
              <button className="w-full bg-amber-500 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition-colors">
                Prendre rendez-vous
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;








