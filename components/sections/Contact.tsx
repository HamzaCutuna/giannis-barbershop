'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Visit our barbershop in the heart of Sarajevo or reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-black-light p-8 rounded-lg border border-gold/20">
              <h3 className="text-xl font-semibold mb-6 text-gold">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-black p-2 rounded mr-4">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Our Location</h4>
                    <p className="text-gray-300">Čekaluša 13, 71000 Sarajevo, Bosnia and Herzegovina</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black p-2 rounded mr-4">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-gray-300">+387 33 877 449</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black p-2 rounded mr-4">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-300">info@giannisbarbershop.ba</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-black p-2 rounded mr-4">
                    <Clock className="text-gold" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Working Hours</h4>
                    <p className="text-gray-300">Mon-Fri: 10:00 - 18:00</p>
                    <p className="text-gray-300">Saturday: 10:00 - 15:00</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="h-full min-h-[400px] rounded-lg overflow-hidden border border-gold/20">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.99018131257!2d18.4181929!3d43.8615512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8d103f98625%3A0x8d1a45d7369a7edf!2sGianni&#39;s%20Barbershop!5e1!3m2!1sbs!2sba!4v1747671646208!5m2!1sbs!2sba" 
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                aria-hidden="false"
                tabIndex={0}
                title="Gianni's Barbershop Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 