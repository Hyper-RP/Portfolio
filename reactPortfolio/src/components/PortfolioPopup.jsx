import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi'; 
const PortfolioPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 
    
  }, []); 

  const handleClose = () => {
    setIsOpen(false);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: { type: 'spring', stiffness: 120, damping: 20 },
    },
    exit: {
      y: '100vh',
      opacity: 0,
      transition: { duration: 0.3 }
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleClose} 
        >
          <motion.div
            className="relative w-full max-w-lg p-8 m-4 bg-white rounded-xl shadow-2xl dark:bg-gray-800"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Hello there! 👋
              </h2>
              <p className="text-md text-gray-600 dark:text-gray-300 mb-6">
                Rohit this side. Thank you for visiting my portfolio!
              </p>
              <div className="p-4 bg-blue-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-200">
                  If you liked my work and want a similar portfolio for yourself, or have a project in mind, I'd love to connect!
                </p>
                <p className="mt-4 font-semibold text-blue-600 dark:text-blue-400">
                  Do reply to me on instagram or Linkedin</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PortfolioPopup;