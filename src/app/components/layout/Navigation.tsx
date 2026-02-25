import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, Coffee, Briefcase, Info, Phone, Star } from 'lucide-react';
import { NavLink } from 'react-router';
import { COLORS } from '../../../constants/theme';
import { cn } from '../../../lib/utils';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { label: 'الرئيسية', path: '/', icon: Home },
    { label: 'خدماتنا', path: '/services', icon: Star },
    { label: 'تقديماتنا وتوزيعاتنا', path: '/offerings', icon: Coffee },
    { label: 'معرض أعمالنا', path: '/portfolio', icon: Briefcase },
    { label: 'من نحن', path: '/about', icon: Info },
    { label: 'تواصل معنا', path: '/contact', icon: Phone },
  ];

  return (
    <>
      {/* Floating Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-16 h-16 rounded-full bg-[#B8860B] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={28} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Pop-up Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex flex-col justify-end pb-28 px-4 md:px-0 items-center"
            onClick={toggleMenu}
          >
            <motion.nav
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 100, opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.path}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "flex items-center gap-4 p-4 rounded-xl transition-all duration-300 group",
                          isActive
                            ? "bg-[#B8860B] text-white shadow-lg"
                            : "bg-white/5 text-white hover:bg-white/10 hover:translate-x-1"
                        )
                      }
                    >
                      <item.icon size={20} className={cn("transition-colors", ({ isActive }: any) => isActive ? "text-white" : "text-[#B8860B]")} />
                      <span className="text-lg font-medium">{item.label}</span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
