'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ProtectedImage from '@/components/ProtectedImage';

const WA = "966508252134";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  img: string;
  category: string;
  details?: {
    features: string[];
    outfits?: { name: string; img: string }[];
  };
}

const categories = [
  {
    key: 'hospitality',
    label: 'خدمات الضيافة',
    icon: '☕',
    services: [
      {
        id: 'saudi-coffee',
        title: 'صباح القهوة السعودية',
        subtitle: 'تراث أصيل',
        description: 'نقدم أجود أنواع القهوة السعودية المحضرة بعناية مع الهيل والزعفران، تقدم بأسلوب ملكي فاخر.',
        img: '/images/services/coffee.jpg',
        category: 'hospitality',
        details: {
          features: ['بن خولاني درجة أولى', 'تحضير طازج في الموقع', 'تقديم بالدلال المذهبة', 'تمر سكري فاخر'],
        }
      },
      {
        id: 'tea-service',
        title: 'ركن الشاي الفاخر',
        subtitle: 'تنوع المذاق',
        description: 'تشكيلة واسعة من أنواع الشاي العالمي والمحلي، يقدم في أواني كريستالية فاخرة.',
        img: '/images/services/tea.jpg',
        category: 'hospitality',
        details: {
          features: ['شاي ربيع إكسبريس', 'شاي أخضر بالياسمين', 'شاي مغربي أصيل', 'تقديم بالسماور المذهب'],
        }
      },
      {
        id: 'zamzam',
        title: 'سقاء زمزم',
        subtitle: 'سقيا مباركة',
        description: 'خدمة توزيع ماء زمزم المبارك في عبوات مبردة أو كاسات كريستالية بأسلوب راقٍ.',
        img: '/images/services/zamzam.jpg',
        category: 'hospitality',
        details: {
          features: ['ماء زمزم نقي', 'تبريد مثالي', 'كاسات مذهبة خاصة', 'زي موحد للسقاة'],
        }
      },
      {
        id: 'dates-sweets',
        title: 'التمور والحلويات',
        subtitle: 'حلاوة الضيافة',
        description: 'أفخر أنواع التمور المحشوة والحلويات الشرقية والغربية المختارة بعناية.',
        img: '/images/services/dates.jpg',
        category: 'hospitality',
        details: {
          features: ['تمور محشوة بالمكسرات', 'حلويات شرقية فاخرة', 'شوكولاتة بلجيكية', 'تنسيق صواني ملكي'],
        }
      }
    ]
  },
  {
    key: 'staff',
    label: 'طاقم الضيافة',
    icon: '🤵',
    services: [
      {
        id: 'waiters',
        title: 'مضيفون محترفون',
        subtitle: 'لباقة وإتقان',
        description: 'طاقم من المضيفين المدربين على أعلى معايير الضيافة العالمية لخدمة ضيوفكم.',
        img: '/images/services/waiters.jpg',
        category: 'staff',
        details: {
          features: ['تدريب احترافي', 'لباقة في التعامل', 'إدارة تدفق الضيوف', 'زي رسمي فاخر'],
          outfits: [
            { name: 'الزي الرسمي', img: '/images/outfits/formal.jpg' },
            { name: 'الزي التراثي', img: '/images/outfits/traditional.jpg' }
          ]
        }
      },
      {
        id: 'waitresses',
        title: 'مضيفات محترفات',
        subtitle: 'رقي وخصوصية',
        description: 'مضيفات متخصصات للمناسبات النسائية، يتميزن بالرقي والخصوصية التامة.',
        img: '/images/services/waitresses.jpg',
        category: 'staff',
        details: {
          features: ['خصوصية تامة', 'إتقان فنون التقديم', 'تنظيم صالات النساء', 'أزياء موحدة أنيقة'],
        }
      },
      {
        id: 'supervisors',
        title: 'مشرفو فعاليات',
        subtitle: 'دقة التنظيم',
        description: 'إشراف كامل على سير خدمة الضيافة لضمان أعلى مستويات الجودة والرضا.',
        img: '/images/services/supervisors.jpg',
        category: 'staff',
        details: {
          features: ['تنسيق الطواقم', 'مراقبة الجودة', 'حل المشكلات الفوري', 'تقارير الأداء'],
        }
      }
    ]
  },
  {
    key: 'equipment',
    label: 'تأجير المعدات',
    icon: '🍽️',
    services: [
      {
        id: 'luxury-sets',
        title: 'أطقم ضيافة فاخرة',
        subtitle: 'فخامة المائدة',
        description: 'تأجير أطقم الدلال والبيالات والفناجين المذهبة والفضية ذات التصاميم الفريدة.',
        img: '/images/services/equipment.jpg',
        category: 'equipment',
        details: {
          features: ['دلال مذهبة وفضية', 'فناجين كريستال', 'صواني تقديم ملكية', 'مباخر فاخرة'],
        }
      },
      {
        id: 'furniture',
        title: 'أثاث المناسبات',
        subtitle: 'راحة وأناقة',
        description: 'توفير الكراسي والطاولات الفاخرة التي تتناسب مع طابع مناسبتكم الراقي.',
        img: '/images/services/furniture.jpg',
        category: 'equipment',
        details: {
          features: ['كراسي ملكية', 'طاولات استقبال', 'كنب فاخر', 'سجاد أحمر'],
        }
      }
    ]
  }
];

function ServiceModal({ service, onClose }: { service: ServiceItem; onClose: () => void }) {
  const [selectedOutfit, setSelectedOutfit] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-[#1a1a1a] w-full max-w-4xl rounded-3xl overflow-hidden relative border border-[#B8860B]/20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-[#B8860B] transition-colors">✕</button>
        
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-[300px] md:h-full">
            <ProtectedImage src={service.img} alt={service.title} width={800} height={1000} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent md:hidden" />
          </div>
          
          <div className="p-8 md:p-12 flex flex-col">
            <span className="text-[#B8860B] text-xs font-bold tracking-widest mb-2 uppercase">{service.subtitle}</span>
            <h2 className="text-[#F5F5DC] text-3xl md:text-4xl font-tajawal font-black mb-6 leading-tight">{service.title}</h2>
            <p className="text-[#F5F5DC]/60 text-sm leading-relaxed mb-8">{service.description}</p>
            
            <div className="space-y-4 mb-10">
              <h4 className="text-[#F5F5DC] text-sm font-bold flex items-center gap-2">
                <span className="w-5 h-px bg-[#B8860B]" /> مميزات الخدمة
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {service.details?.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#F5F5DC]/80 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" /> {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row gap-4">
              <a 
                href={`https://wa.me/${WA}?text=${encodeURIComponent(`مرحباً، أود الاستفسار عن خدمة: ${service.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-8 py-4 rounded-full bg-[#B8860B] text-black text-center font-bold text-sm hover:bg-[#D4A017] transition-colors shadow-lg shadow-[#B8860B]/20"
              >
                طلب الخدمة الآن
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ServiceCard({ service, onClick, index }: { service: ServiceItem; onClick: () => void; index: number }) {
  return (
    <div onClick={onClick} className="relative rounded-2xl overflow-hidden group cursor-pointer h-full" style={{ minHeight: "100%" }}>
      <ProtectedImage src={service.img} alt={service.title} width={600} height={800} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 img-overlay" />
      <div className="absolute inset-0 bg-[#B8860B]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[#B8860B]" style={{ fontSize: "0.65rem", background: "rgba(10,8,2,0.85)", backdropFilter: "blur(10px)", border: "1px solid rgba(184,134,11,0.3)", letterSpacing: "0.05em" }}>{service.subtitle}</div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-[#F5F5DC]" style={{ fontSize: "1.05rem", fontWeight: 700 }}>{service.title}</h3>
        <p className="text-[#F5F5DC]/50 text-xs mt-1 line-clamp-2">{service.description}</p>
      </div>
    </div>
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

export default function ServicesClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    if (selectedService) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  const currentCategory = categories[activeTab];

  return (
    <div className="min-h-screen bg-[#0f0f0f] pb-32">
      <Breadcrumbs />
      {/* HERO */}
      <section className="relative pt-4 pb-6 px-4 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 20%, rgba(184,134,11,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-[#B8860B] mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}>✦ خدماتنا ✦</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-[#F5F5DC] mb-4 font-tajawal" style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: 900, lineHeight: 1.15}}>باقة متكاملة من<br /><span className="gold-gradient-text">الضيافة الفاخرة</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-[#F5F5DC]/55 max-w-xl mx-auto text-sm leading-relaxed">اكتشف مجموعة خدماتنا المتكاملة المصممة لتلبية جميع احتياجات الضيافة في مناسباتكم</motion.p>
        </div>
      </section>
      {/* ROYAL TRIO STICKY NAV */}
      <RoyalTrioNav activeTab={activeTab} onTabChange={setActiveTab} />
      {/* SERVICES GRID */}
      <section className="px-4 pb-20 pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px] sm:auto-rows-[350px] lg:auto-rows-[400px]">
            {currentCategory.services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4 }}
              >
                <ServiceCard service={service} onClick={() => setSelectedService(service)} index={i} />
              </motion.div>
            ))}
          </div>
          {/* CTA */}
          <div className="mt-16 text-center p-8 sm:p-12 rounded-3xl relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(25,20,8,0.9), rgba(15,12,5,0.95))", border: "1px solid rgba(184,134,11,0.2)" }}>
            <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(184,134,11,0.06) 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <h2 className="text-[#F5F5DC] mb-3" style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", fontWeight: 800}}>لم تجد ما تبحث عنه؟</h2>
              <p className="text-[#F5F5DC]/50 text-sm mb-6 max-w-lg mx-auto">تواصل معنا وسنصمم لك باقة ضيافة مخصصة تناسب مناسبتك</p>
              <a href={`https://wa.me/${WA}?text=${encodeURIComponent("مرحباً، أود الاستفسار عن خدمات الضيافة لديكم.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white" style={{ background: "linear-gradient(135deg, #1da851, #25D366)", fontWeight: 700, boxShadow: "0 6px 25px rgba(37,211,102,0.35)" }}>
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                تواصل عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* MODAL */}
      <AnimatePresence>
        {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
      </AnimatePresence>
    </div>
  );
}
