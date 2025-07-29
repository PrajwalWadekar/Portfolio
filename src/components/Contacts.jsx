import React from 'react';
import { CONTACT } from "../index.js";
import { motion } from "framer-motion";
import { Mail } from "lucide-react"; 

const Contacts = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter space-y-4">
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          {CONTACT.address}
        </motion.p>

        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
        >
          {CONTACT.phoneNo}
        </motion.p>

        
        <motion.a 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`}
          className='inline-flex items-center gap-2 justify-center border-b hover:text-blue-500 duration-300'
        >
          <Mail size={18} /> {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contacts;
