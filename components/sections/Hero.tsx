'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center py-20"
      style={{
        backgroundImage: `url('/images/hero-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="container z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="Gianni's Barbershop"
            width={600}
            height={200}
            className="mx-auto"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white max-w-3xl mx-auto leading-tight"
        >
          Premium Grooming Experience Since 2013
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl text-gray-200 mt-6 max-w-2xl mx-auto"
        >
          Sarajevo&apos;s finest barbershop offering exceptional haircuts, beard trims, and traditional shaves.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-10"
        >
          <Link href="#booking" className="btn">
            Book Your Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 