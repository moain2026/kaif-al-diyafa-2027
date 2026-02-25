import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowLeft, ArrowRight, Instagram, Phone, MapPin } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import FloatingMenu from './components/FloatingMenu';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function Layout() {
  const location = useLocation();

  return (
    <div dir="rtl" className="min-h-screen bg-[#212121] text-[#F5F5DC] font-sans selection:bg-[#B8860B] selection:text-white">
      {/* Background patterns or ambient light could go here */}
      
      <main className="relative z-10 min-h-screen pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <FloatingMenu />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}
