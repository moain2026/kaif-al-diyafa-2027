import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from 'motion/react';

const images = [
  "https://images.unsplash.com/photo-1617995815236-7f06f6e53180?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1629782666026-04093129d0e2?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1688487197602-9c40fa317e74?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1728970383255-9a912a738763?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1771387569220-061cb022e715?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1542125387-c71274d94f0a?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
];

export default function Portfolio() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5DC] mb-6">معرض أعمالنا</h1>
          <p className="text-[#F5F5DC]/60 max-w-2xl mx-auto text-lg">
             لقطات توثق لحظات الفخامة والضيافة التي صنعناها لعملائنا المميزين.
          </p>
        </motion.div>

        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
            <Masonry gutter="24px">
                {images.map((image, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative group rounded-xl overflow-hidden"
                    >
                        <img
                            src={image}
                            style={{width: "100%", display: "block"}}
                            alt={`Portfolio item ${i}`}
                            className="transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="text-[#B8860B] border border-[#B8860B] px-4 py-2 rounded-full font-medium">عرض المشروع</span>
                        </div>
                    </motion.div>
                ))}
            </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}
