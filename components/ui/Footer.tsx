'use client';

import Link from 'next/link';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-dark py-12 border-t border-gold/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Lijevi dio */}
          <div>
  <Link
    href="#home"
    className="font-logo text-gold text-2xl font-bold block text-center md:text-left"
  >
    GIANNI&apos;S BARBERSHOP
  </Link>
  <div className="text-gray-400 mt-4 text-center md:text-left max-w-md">
    <p className="text-lg text-balance">
      Precision Cuts. Modern Style. Where Tradition meets Excellence — Since 2013.
    </p>
  </div>
</div>


          {/* Desni dio - social links */}
          <div className="flex justify-center md:justify-end w-full md:w-auto space-x-6">
            <Link
              href="https://www.instagram.com/giannisbarbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-3 rounded-full border border-gold/20 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="text-gold" size={24} />
            </Link>
            <Link
              href="https://www.facebook.com/GiannisBarbershop"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-3 rounded-full border border-gold/20 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
              aria-label="Facebook"
            >
              <Facebook className="text-gold" size={24} />
            </Link>
            <Link
              href="https://www.youtube.com/watch?v=q6wMxuviKyk&ab_channel=1minut"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black p-3 rounded-full border border-gold/20 hover:border-gold/50 hover:bg-gold/10 transition-all duration-300"
              aria-label="Youtube"
            >
              <Youtube className="text-gold" size={24} />
            </Link>
          </div>
        </div>

        {/* Donji centrirani tekst */}
        <div className="mt-8 text-center space-y-1">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Gianni&apos;s Barbershop. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed by <Link href="https://cutuna.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 transition-colors duration-300">HamzaDev</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
