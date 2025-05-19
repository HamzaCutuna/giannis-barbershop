'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X } from 'lucide-react';

// Define the image type
type GalleryImage = {
  id: number;
  src: string;
  alt: string;
};

// In a real project, these would be actual images from your public folder
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery_image_1.jpg',
    alt: 'Pet friendly barbershop',
  },
  {
    id: 2,
    src: '/images/gallery_image_2.jpg',
    alt: 'Barbershop interior',
  },
  {
    id: 3,
    src: '/images/gallery_image_3.jpg',
    alt: 'Kids haircut',
  },
  {
    id: 4,
    src: '/images/gallery_image_4.jpg',
    alt: 'Classic haircut',
  },
  {
    id: 5,
    src: '/images/gallery_image_5.jpg',
    alt: 'Mullet haircut',
  },
  {
    id: 6,
    src: '/images/gallery_image_6.jpg',
    alt: 'Modern fade haircut',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Gallery</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Take a look at our premium barbershop and some of our finest work.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="aspect-square overflow-hidden rounded-lg relative cursor-pointer group"
              onClick={() => setSelectedImage(image)}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gold/30 z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 z-20 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.alt}
              </div>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
              >
                <X size={32} />
              </button>
              <div className="aspect-square md:aspect-video relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 75vw"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 