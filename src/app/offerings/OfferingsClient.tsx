'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ProtectedImage from '@/components/ProtectedImage';

const WA = "966508252134";

interface OfferingItem {
  name: string;
  description: string;
  img: string;
}

interface Category {
  key: string;
  label: string;
  icon: string;
  description: string;
  items: OfferingItem[];
}

const categories: Category[] = [
  {
    key: 'hot-drinks',
    label: 'مشروبات حارة',
    icon: '☕',
    description: 'تشكيلة فاخرة من القهوة السعودية الأصيلة وأنواع الشاي العالمي والمحلي.',
    items: [
      { name: 'قهوة سعودية ملكية', description: 'بن خولاني فاخر مع الهيل والزعفران', img: '/images/offerings/coffee-1.jpg' },
      { name: 'شاي مغربي أصيل', description: 'شاي أخضر بالنعناع المغربي الطازج', img: '/images/offerings/tea-1.jpg' },
      { name: 'شاي كرك', description: 'شاي بالحليب والهيل والزعفران', img: '/images/offerings/karak.jpg' },
      { name: 'قهوة تركية', description: 'قهوة تركية محضرة على الرمل', img: '/images/offerings/turkish.jpg' },
    ]
  },
  {
    key: 'cold-drinks',
    label: 'مشروبات باردة',
    icon: '🍹',
    description: 'عصائر طازجة ومشروبات باردة منعشة تقدم بأسلوب عصري.',
    items: [
      { name: 'عصير برتقال طازج', description: 'عصير طبيعي 100% بدون إضافات', img: '/images/offerings/orange.jpg' },
      { name: 'موهيتو منعش', description: 'تشكيلة من نكهات الموهيتو بالنعناع والليمون', img: '/images/offerings/mojito.jpg' },
      { name: 'قهوة باردة', description: 'سبانش لاتيه وآيس أمريكانو فاخر', img: '/images/offerings/cold-brew.jpg' },
      { name: 'عصائر استوائية', description: 'مزيج من الفواكه الاستوائية الطازجة', img: '/images/offerings/tropical.jpg' },
    ]
  },
  {
    key: 'sweets',
    label: 'حلويات وتمور',
    icon: '🍬',
    description: 'أفخر أنواع التمور المحشوة والحلويات الشرقية والغربية.',
    items: [
      { name: 'تمور محشوة فاخرة', description: 'تمر سكري وخلاص محشو بالمكسرات', img: '/images/offerings/dates-1.jpg' },
      { name: 'حلويات شرقية', description: 'بقلاوة وكنافة بلمسة عصرية', img: '/images/offerings/oriental.jpg' },
      { name: 'ميني كيك', description: 'تشكيلة من الكيك الفرنسي الصغير', img: '/images/offerings/mini-cake.jpg' },
      { name: 'شوكولاتة بلجيكية', description: 'أفخر أنواع الشوكولاتة العالمية', img: '/images/offerings/chocolate.jpg' },
    ]
  }
];

function Lightbox({ items, initialIndex, onClose }: { items: OfferingItem[]; initialIndex: number; onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-6 right-6 z-50 text-white/50 hover:text-white transition-colors">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="relative w-full max-w-5xl aspect-[4/5] md:aspect-video flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <ProtectedImage
              src={items[currentIndex].img}
              alt={items[currentIndex].name}
              width={1200}
              height={800}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-center">
              <h3 className="text-[#F5F5DC] text-2xl font-bold mb-2">{items[currentIndex].name}</h3>
              <p className="text-[#F5F5DC]/60 text-sm">{items[currentIndex].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-colors">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

function RoyalTrioNav({ activeTab, onTabChange }: { activeTab: number; onTabChange: (index: number) => void }) {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (containerRef.current) {
        const containerTop = containerRef.current.getBoundingClientRect().top;
        setIsSticky(containerTop <= 0);
      }
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <div ref={containerRef} className="w-full">
      <motion.section
        ref={navRef}
        className={`w-full transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 z-50' : 'relative'}`}
        animate={{
          paddingTop: isSticky ? '12px' : '16px',
          paddingBottom: isSticky ? '12px' : '16px',
          background: isSticky ? 'rgba(15, 15, 15, 0.95)' : 'transparent',
          backdropFilter: isSticky ? 'blur(16px)' : 'none',
          borderBottom: isSticky ? '1px solid rgba(184, 134, 11, 0.15)' : 'none',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center gap-2 sm:gap-3">
            {categories.map((cat, idx) => (
              <motion.button
                key={cat.key}
                onClick={() => onTabChange(idx)}
                className="relative group flex-1 max-w-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-3xl transition-all duration-300"
                  animate={{
                    background: activeTab === idx
                      ? 'linear-gradient(135deg, rgba(184,134,11,0.25), rgba(212, 160, 23, 0.15))'
                      : 'rgba(0, 0, 0, 0.25)',
                    border: activeTab === idx
                      ? '2px solid rgba(184, 134, 11, 0.7)'
                      : '1.5px solid rgba(184, 134, 11, 0.15)',
                    boxShadow: activeTab === idx
                      ? '0 0 30px rgba(184, 134, 11, 0.4), inset 0 0 20px rgba(184, 134, 11, 0.1)'
                      : 'none',
                  }}
                />
                <div className="relative flex flex-col items-center justify-center p-2 sm:p-4 h-full min-h-[65px] sm:min-h-[80px]">
                  <motion.span 
                    className="text-lg sm:text-xl mb-1.5"
                    animate={{ 
                      scale: activeTab === idx ? 1.2 : 1,
                      filter: activeTab === idx ? 'drop-shadow(0 0 8px rgba(184, 134, 11, 0.5))' : 'grayscale(0.5) opacity(0.7)'
                    }}
                  >
                    {cat.icon}
                  </motion.span>
                  <motion.p
                    className="text-[10px] sm:text-[12px] text-center font-bold leading-tight"
                    style={{
                      textShadow: '0 1px 4px rgba(0, 0, 0, 0.5), 0 0 8px rgba(184, 134, 11, 0.2)',
                    }}
                    animate={{
                      color: activeTab === idx ? '#D4A017' : '#F5F5DC',
                      opacity: activeTab === idx ? 1 : 0.8,
                      fontSize: isSticky ? '0.75rem' : '0.85rem',
                    }}
                    transition={{ type: 'spring', stiffness: 280, damping: 20, mass: 0.8, delay: 0.05 }}
                    layout
                  >
                    {cat.label}
                  </motion.p>
                </div>
                {activeTab === idx && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#B8860B] via-[#D4A017] to-[#B8860B]"
                    style={{ borderRadius: '2px' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default function OfferingsClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState<{ items: OfferingItem[]; index: number } | null>(null);

  const currentCategory = categories[activeTab];

  return (
    <main className="min-h-screen bg-[#0f0f0f] pb-32">
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <Breadcrumbs />
          {/* Hero Section */}
          <section className="relative pt-4 pb-6 px-4 overflow-hidden">
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(184,134,11,0.08) 0%, transparent 60%)" }} />
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>✦ تقديماتنا ✦</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[#F5F5DC] mb-4 font-tajawal" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15}}>مذاق الأصالة في<br /><span className="gold-gradient-text">كل تفصيل</span></motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#F5F5DC]/55 max-w-xl mx-auto text-sm leading-relaxed">نقدم لكم تشكيلة مختارة من أجود المشروبات والتمور والحلويات التي تعكس كرم الضيافة السعودية الأصيلة</motion.p>
            </div>
          </section>
        </div>
        {/* Royal Trio Sticky Navigation */}
        <RoyalTrioNav activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      {/* Content Grid */}
      <div className="container mx-auto px-4 pt-12">
        {/* Category Header */}
        <div className="mb-10 text-center">
          <p className="text-[#B8860B] text-sm mb-2" style={{ letterSpacing: "0.1em" }}>✦ {currentCategory.label} ✦</p>
          <p className="text-[#F5F5DC]/60 text-sm sm:text-base max-w-lg mx-auto">{currentCategory.description}</p>
        </div>
        {/* Items Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {currentCategory.items.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightbox({ items: currentCategory.items, index: idx })}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5]"
            >
              <ProtectedImage
                src={item.img}
                alt={item.name}
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 img-overlay" />
              <div className="absolute inset-0 bg-[#B8860B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h3 className="text-[#F5F5DC]" style={{ fontSize: "1.1rem", fontWeight: 700 }}>{item.name}</h3>
                <p className="text-[#F5F5DC]/50 text-xs mt-1 line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            items={lightbox.items}
            initialIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
      {/* CTA */}
      <div className="mt-20 text-center p-8 sm:p-12 rounded-3xl relative overflow-hidden mx-4 max-w-2xl mx-auto" style={{ background: "linear-gradient(135deg, rgba(25,20,8,0.9), rgba(15,12,5,0.95))", border: "1px solid rgba(184,134,11,0.2)" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(184,134,11,0.06) 0%, transparent 70%)" }} />
        <div className="relative z-10">
          <h2 className="text-[#F5F5DC] mb-3" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 800}}>هل تريد تجربة تقديماتنا؟</h2>
          <p className="text-[#F5F5DC]/50 text-sm mb-6 max-w-lg mx-auto">تواصل معنا الآن واستمتع بأجود التقديمات الفاخرة</p>
          <a href={`https://wa.me/${WA}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن تقديماتكم وتوزيعاتكم الفاخرة.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white" style={{ background: "linear-gradient(135deg, #1da851, #25D366)", fontWeight: 700, boxShadow: "0 6px 25px rgba(37,211,102,0.35)" }}>
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            تواصل عبر واتساب
          </a>
        </div>
      </div>
    </main>
  );
}
