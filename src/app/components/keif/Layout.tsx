import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Instagram, MapPin, Coffee, Star, Users, Briefcase, Home } from "lucide-react";
import { Link } from "react-router";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for class merging
function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// Global Colors
const colors = {
  black: "#212121",
  gold: "#B8860B",
  cream: "#F5F5DC",
  darkGray: "#424242",
};

// --- Components ---

// WhatsApp Button
function WhatsAppButton() {
  const location = useLocation();
  const [message, setMessage] = useState("مرحباً، أود الاستفسار عن خدمات الضيافة لديكم.");

  useEffect(() => {
    if (location.pathname.includes("/services")) {
      setMessage("مرحباً، أود الاستفسار عن خدمة معينة.");
    } else if (location.pathname.includes("/offerings")) {
      setMessage("مرحباً، أود الاستفسار عن التقديمات.");
    } else {
      setMessage("مرحباً، أود الاستفسار عن خدمات الضيافة لديكم.");
    }
  }, [location]);

  const whatsappUrl = `https://wa.me/966500000000?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse"
      aria-label="Chat on WhatsApp"
    >
      <Phone className="text-white w-8 h-8 fill-current" />
    </a>
  );
}

// Floating Menu Button & Pop-up Menu
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const links = [
    { name: "الرئيسية", path: "/", icon: Home },
    { name: "خدماتنا", path: "/services", icon: Briefcase },
    { name: "تقديماتنا", path: "/offerings", icon: Coffee },
    { name: "معرض أعمالنا", path: "/portfolio", icon: Star },
    { name: "من نحن", path: "/about", icon: Users },
    { name: "تواصل معنا", path: "/contact", icon: Phone },
  ];

  return (
    <>
      {/* Floating Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#B8860B] text-[#F5F5DC] w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform duration-300 border-2 border-[#F5F5DC]/20 backdrop-blur-md"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Pop-up Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#212121]/95 backdrop-blur-xl flex flex-col items-center justify-center text-[#F5F5DC]"
          >
            <nav className="flex flex-col gap-6 text-center">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-2xl font-bold hover:text-[#B8860B] transition-colors flex items-center gap-3 justify-center"
                >
                  <link.icon size={24} />
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-12 flex gap-6">
              <a href="#" className="hover:text-[#B8860B] transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-[#B8860B] transition-colors"><Phone size={24} /></a>
              <a href="#" className="hover:text-[#B8860B] transition-colors"><MapPin size={24} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Layout Component
export default function Layout() {
  return (
    <div className="min-h-screen bg-[#212121] text-[#F5F5DC] font-sans overflow-x-hidden" style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}>
      <ScrollRestoration />
      
      {/* Header/Nav for desktop (optional, keeping it minimal as per design charter focusing on floating menu) */}
      <header className="fixed top-0 left-0 right-0 z-30 p-6 flex justify-between items-center bg-gradient-to-b from-[#212121]/80 to-transparent pointer-events-none">
        <div className="pointer-events-auto">
            <Link to="/" className="text-2xl font-bold text-[#B8860B] tracking-wider">كيف الضيافة</Link>
        </div>
        {/* Desktop Links could go here, but charter emphasizes mobile-first & floating menu */}
      </header>

      <main className="relative z-10">
        <Outlet />
      </main>

      <WhatsAppButton />
      <Navigation />
      
      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-12 px-6 pb-24 text-center text-sm text-gray-400">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-right">
            <h3 className="text-[#B8860B] text-xl font-bold mb-2">كيف الضيافة</h3>
            <p>تجربة ضيافة فاخرة تعكس الأصالة السعودية.</p>
          </div>
          <div className="flex gap-4">
             <a href="#" className="hover:text-[#B8860B] transition-colors">سياسة الخصوصية</a>
             <a href="#" className="hover:text-[#B8860B] transition-colors">الشروط والأحكام</a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          &copy; {new Date().getFullYear()} كيف الضيافة. جميع الحقوق محفوظة.
        </div>
      </footer>
    </div>
  );
}
