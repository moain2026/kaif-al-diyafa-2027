import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const coffeeImg =
  "https://images.unsplash.com/photo-1670351230643-27f874d17025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYXVkaSUyMEFyYWJpYyUyMHRyYWRpdGlvbmFsJTIwY29mZmVlJTIwZGFsbGFofGVufDF8fHx8MTc3MjA1NjQxMHww&ixlib=rb-4.1.0&q=80&w=1080";
const teaImg =
  "https://images.unsplash.com/photo-1572282924904-41bacfbd86a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwQXJhYmljJTIwdGVhJTIwc2VydmljZSUyMGNlcmVtb255fGVufDF8fHx8MTc3MjA1NjQxM3ww&ixlib=rb-4.1.0&q=80&w=1080";
const heroImg =
  "https://images.unsplash.com/photo-1758899058841-d70f58437fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBBcmFiaWMlMjBjb2ZmZWUlMjBob3NwaXRhbGl0eSUyMGdvbGR8ZW58MXx8fHwxNzcyMDU2NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const equipImg =
  "https://images.unsplash.com/photo-1771830933605-ffbae3e3d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXRlcmluZyUyMGVxdWlwbWVudCUyMHNpbHZlciUyMGdvbGQlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MjA1NjQxOHww&ixlib=rb-4.1.0&q=80&w=1080";

const categories = [
  {
    id: "hot",
    label: "مشروبات حارة",
    icon: "☕",
    items: [
      { name: "القهوة السعودية", desc: "بهارات مميزة وأصالة سعودية", img: coffeeImg },
      { name: "القهوة العربية", desc: "بالهيل والزعفران", img: heroImg },
      { name: "الشاي الكرك", desc: "بالحليب والبهارات", img: teaImg },
      { name: "الشاي الأخضر", desc: "بالنعناع الطازج", img: teaImg },
    ],
  },
  {
    id: "cold",
    label: "مشروبات باردة",
    icon: "🧊",
    items: [
      { name: "عصير الليمون بالنعناع", desc: "منعش وطبيعي", img: heroImg },
      { name: "عصائر الفواكه الطازجة", desc: "تشكيلة متنوعة", img: coffeeImg },
      { name: "المشروبات المثلجة", desc: "بنكهات متعددة", img: teaImg },
    ],
  },
  {
    id: "dates",
    label: "تمر فاخر",
    icon: "🌴",
    items: [
      { name: "تمر مجدول", desc: "أجود أنواع التمر السعودي", img: heroImg },
      { name: "تمر بالمكسرات", desc: "محشو بالجوز والبادام", img: coffeeImg },
      { name: "تمر بالشوكولاتة", desc: "مكسو بشوكولاتة بلجيكية", img: equipImg },
      { name: "صواني التمر الفاخرة", desc: "تشكيلات راقية للمناسبات", img: teaImg },
    ],
  },
  {
    id: "sweets",
    label: "حلويات وشوكولاتة",
    icon: "🍫",
    items: [
      { name: "شوكولاتة بلجيكية", desc: "تشكيلة متنوعة من أجود الأنواع", img: heroImg },
      { name: "معمول فاخر", desc: "بالتمر والمكسرات", img: coffeeImg },
      { name: "كنافة نابلسية", desc: "بعجينة الكنافة الأصيلة", img: teaImg },
      { name: "بسبوسة فاخرة", desc: "بطعم البلح والقشطة", img: equipImg },
    ],
  },
  {
    id: "pastry",
    label: "معجنات",
    icon: "🥐",
    items: [
      { name: "سمبوسة فاخرة", desc: "بحشوات متنوعة", img: coffeeImg },
      { name: "كروسان بالجبن", desc: "طازج ومقرمش", img: heroImg },
      { name: "مناقيش زعتر", desc: "على الطريقة الشامية", img: teaImg },
    ],
  },
  {
    id: "equipment",
    label: "معدات التقديم",
    icon: "✨",
    items: [
      { name: "دلال ذهبية فاخرة", desc: "لتقديم القهوة بأسلوب راقٍ", img: equipImg },
      { name: "أطقم قهوة بورسلين", desc: "مزخرفة بتصاميم عربية", img: heroImg },
      { name: "صوانٍ فضية فاخرة", desc: "لتقديم التمر والحلويات", img: coffeeImg },
    ],
  },
];

export function OfferingsPage() {
  const [activeCategory, setActiveCategory] = useState("hot");
  const [selectedItem, setSelectedItem] = useState<null | {
    name: string;
    desc: string;
    img: string;
  }>(null);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  return (
    <div className="pt-24 pb-32 min-h-screen">
      {/* Header */}
      <div className="relative py-16 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(184,134,11,0.12) 0%, transparent 60%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <p
            className="text-[#B8860B] mb-3"
            style={{ fontSize: "0.8rem", letterSpacing: "0.25em" }}
          >
            ✦ أرقى التقديمات ✦
          </p>
          <h1
            className="text-[#F5F5DC] mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 700 }}
          >
            تقديماتنا وتوزيعاتنا
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto mb-4" />
          <p className="text-[#F5F5DC]/55 max-w-lg mx-auto text-sm leading-relaxed">
            تشكيلة واسعة من أرقى المشروبات والحلويات والتقديمات الفاخرة لإضفاء لمسة مميزة على
            مناسباتكم
          </p>
        </motion.div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="flex gap-2 flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#1a1a1a] shadow-lg shadow-[#B8860B]/30"
                  : "border border-[#B8860B]/20 text-[#F5F5DC]/60 hover:border-[#B8860B]/40 hover:text-[#B8860B]"
              }`}
              style={{ fontWeight: activeCategory === cat.id ? 700 : 400 }}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Items Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {currentCategory.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedItem(item)}
                className="rounded-2xl overflow-hidden cursor-pointer group border border-[#B8860B]/10 hover:border-[#B8860B]/30 transition-all duration-300"
                style={{ background: "rgba(30,25,15,0.5)" }}
              >
                <div className="relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
                  <ImageWithFallback
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-[#B8860B] text-2xl">✦</span>
                  </div>
                </div>
                <div className="p-3">
                  <h3
                    className="text-[#F5F5DC]"
                    style={{ fontSize: "0.9rem", fontWeight: 600 }}
                  >
                    {item.name}
                  </h3>
                  <p className="text-[#F5F5DC]/50 text-xs mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-sm w-full rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #242015 0%, #1a1a1a 100%)",
                border: "1px solid rgba(184,134,11,0.3)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56">
                <ImageWithFallback
                  src={selectedItem.img}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]" />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#1a1a1a]/80 border border-[#B8860B]/30 text-[#F5F5DC]/60 hover:text-[#B8860B] flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <h2
                  className="text-[#F5F5DC] mb-2"
                  style={{ fontSize: "1.3rem", fontWeight: 700 }}
                >
                  {selectedItem.name}
                </h2>
                <p className="text-[#F5F5DC]/60 text-sm mb-6">{selectedItem.desc}</p>
                <a
                  href={`https://wa.me/966500000000?text=${encodeURIComponent(`مرحباً، أود الاستفسار عن ${selectedItem.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#1a1a1a] hover:shadow-lg transition-all duration-300"
                  style={{ fontWeight: 700, fontSize: "0.95rem" }}
                >
                  استفسر الآن
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
