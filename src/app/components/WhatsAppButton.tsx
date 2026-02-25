import React from 'react';
import { useLocation } from 'react-router';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const location = useLocation();

  const getMessage = () => {
    switch (location.pathname) {
      case '/services':
        return "مرحباً، أود الاستفسار عن خدمات الضيافة لديكم.";
      case '/offerings':
        return "مرحباً، أود الاستفسار عن التقديمات والحلويات.";
      case '/portfolio':
        return "مرحباً، لقد اطلعت على معرض أعمالكم وأرغب في ترتيب مماثل.";
      default:
        return "مرحباً، أود الاستفسار عن خدمات كيف الضيافة.";
    }
  };

  const handleClick = () => {
    const message = encodeURIComponent(getMessage());
    window.open(`https://wa.me/966500000000?text=${message}`, '_blank');
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 flex items-center justify-center border-2 border-white/20 hover:shadow-[#25D366]/50 transition-shadow"
    >
      <MessageCircle size={28} fill="white" />
      <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-sm">
        تواصل معنا
      </span>
    </motion.button>
  );
}
