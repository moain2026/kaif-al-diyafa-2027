import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, Coffee, Users, Image as ImageIcon, Phone, Info } from 'lucide-react';

export default function FloatingMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'الرئيسية', icon: Home },
    { path: '/services', label: 'خدماتنا', icon: Users },
    { path: '/offerings', label: 'التقديمات', icon: Coffee },
    { path: '/portfolio', label: 'معرض الأعمال', icon: ImageIcon },
    { path: '/about', label: 'من نحن', icon: Info },
    { path: '/contact', label: 'تواصل معنا', icon: Phone },
  ];

  return (
    <>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#B8860B] text-white p-4 rounded-full shadow-lg shadow-[#B8860B]/30 flex items-center justify-center border-2 border-[#F5F5DC]/20 backdrop-blur-sm"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-40"
          >
            <div className="bg-[#212121]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl overflow-hidden">
              <nav className="grid grid-cols-2 gap-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 group ${
                        isActive 
                          ? 'bg-[#B8860B]/20 text-[#B8860B] border border-[#B8860B]/30' 
                          : 'hover:bg-white/5 text-[#F5F5DC]/80 hover:text-[#F5F5DC]'
                      }`}
                    >
                      <Icon size={24} className={`mb-2 ${isActive ? 'text-[#B8860B]' : 'group-hover:text-[#B8860B] transition-colors'}`} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay to close menu when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
