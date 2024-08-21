import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center text-white pt-10" id="contact">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <motion.form 
          action="https://formsubmit.co/96diegofct@gmail.com" 
          method="POST"
          className="bg-white dark:bg-black/50 shadow-lg rounded-lg p-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:focus:border-primary"
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Contact Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:focus:border-primary"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:focus:border-primary"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary dark:focus:border-primary"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full btn text-white py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
