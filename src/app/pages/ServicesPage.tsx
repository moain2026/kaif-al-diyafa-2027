import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const waiterImg =
  "https://images.unsplash.com/photo-1610845325460-493f99d21de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3YWl0ZXIlMjBob3NwaXRhbGl0eSUyMHVuaWZvcm0lMjBlbGVnYW50fGVufDF8fHx8MTc3MjA1NjQxM3ww&ixlib=rb-4.1.0&q=80&w=1080";
const womanImg =
  "https://images.unsplash.com/photo-1686545232018-bf8d11a36124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjB3b21hbiUyMGhvc3Rlc3MlMjBlbGVnYW50JTIwdHJhZGl0aW9uYWwlMjBkcmVzc3xlbnwxfHx8fDE3NzIwNTY0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const equipImg =
  "https://images.unsplash.com/photo-1771830933605-ffbae3e3d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXRlcmluZyUyMGVxdWlwbWVudCUyMHNpbHZlciUyMGdvbGQlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MjA1NjQxOHww&ixlib=rb-4.1.0&q=80&w=1080";
const cateringImg =
  "https://images.unsplash.com/photo-1769812343266-323d6b508f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3NwaXRhbGl0eSUyMGNhdGVyaW5nJTIwZXZlbnQlMjBzZXR1cHxlbnwxfHx8fDE3NzIwNTY0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080";

const services = [
  {
    id: "male",
    title: "الخدمات الرجالية",
    subtitle: "Male Hospitality Services",
    img: waiterImg,
    icon: "♦",
    description:
      "فريق من المضيفين المحترفين المدربين على أعلى مستوى لتقديم خدمة الضيافة في المناسبات الرجالية والمحافل الرسمية.",
    features: [
      "مضيفون بزي رسمي فاخر",
      "تقديم القهوة السعودية والشاي",
      "خدمة طاولات الضيوف",
      "التنسيق مع إدارة الفعاليات",
      "مدربون على آداب الضيافة السعودية",
    ],
    outfits: [
      { name: "الزي الكلاسيكي الفاخر", color: "#2C2C2C" },
      { name: "الزي التراثي المميز", color: "#4A3728" },
      { name: "الزي الرسمي الأنيق", color: "#1C2840" },
    ],
  },
  {
    id: "female",
    title: "الخدمات النسائية",
    subtitle: "Female Hospitality Services",
    img: womanImg,
    icon: "◈",
    description:
      "مضيفات متميزات يجمعن بين الأناقة والاحترافية لتقديم تجربة ضيافة راقية في المناسبات النسائية والفعاليات الفاخرة.",
    features: [
      "مضيفات بزي أنيق ومحتشم",
      "خدمة تقديم المشروبات والحلويات",
      "استقبال وتوجيه الضيفات",
      "إدارة طاولات العرض والتقديم",
      "تدريب على التميز في الخدمة",
    ],
    outfits: [
      { name: "العباءة الفاخرة الكلاسيكية", color: "#1a1a1a" },
      { name: "الزي الخليجي الأنيق", color: "#3D2B1F" },
      { name: "الزي الرسمي الراقي", color: "#2C1A3A" },
    ],
  },
  {
    id: "artistic",
    title: "الخدمات الفنية",
    subtitle: "Artistic Services",
    img: cateringImg,
    icon: "❋",
    description:
      "عروض ضيافة فنية مميزة تجمع بين التراث العربي الأصيل والإبداع العصري لإضافة لمسة فريدة لمناسبتك.",
    features: [
      "عرض صب القهوة السعودية التقليدي",
      "تحضير الشاي بأساليب فنية",
      "تنسيق وعرض الحلويات بشكل احترافي",
      "إضافة لمسات ثقافية وتراثية",
      "فرق العزف والاستقبال الموسيقي",
    ],
    outfits: [],
  },
  {
    id: "equipment",
    title: "المعدات والتجهيزات",
    subtitle: "Equipment & Setup",
    img: equipImg,
    icon: "◇",
    description:
      "أسطول من أرقى المعدات والتجهيزات الفاخرة لضمان تجربة ضيافة متكاملة ومتميزة في كل المناسبات.",
    features: [
      "دلال قهوة ذهبية وفضية فاخرة",
      "أطقم شاي وقهوة من البورسلين الراقي",
      "طاولات وكراسي بتصاميم فاخرة",
      "معدات تبريد وتدفئة متطورة",
      "إضاءة وديكور مكمل للفعاليات",
    ],
    outfits: [],
  },
];

function ServiceModal({
  service,
  onClose,
}: {
  service: (typeof services)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative max-w-2xl w-full rounded-3xl overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #242015 0%, #1a1a1a 100%)",
          border: "1px solid rgba(184,134,11,0.3)",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 overflow-hidden">
          <ImageWithFallback
            src={service.img}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]" />
          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#1a1a1a]/80 border border-[#B8860B]/30 text-[#F5F5DC]/60 hover:text-[#B8860B] flex items-center justify-center text-lg transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <p className="text-[#B8860B] text-xs mb-1" style={{ letterSpacing: "0.15em" }}>
            {service.subtitle}
          </p>
          <h2 className="text-[#F5F5DC] mb-4" style={{ fontSize: "1.4rem", fontWeight: 700 }}>
            {service.title}
          </h2>
          <p className="text-[#F5F5DC]/65 text-sm leading-relaxed mb-6">{service.description}</p>

          <h3
            className="text-[#B8860B] mb-3"
            style={{ fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.1em" }}
          >
            ما نقدمه:
          </h3>
          <ul className="space-y-2 mb-6">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-[#F5F5DC]/70">
                <span className="text-[#B8860B]">✦</span>
                {f}
              </li>
            ))}
          </ul>

          {service.outfits.length > 0 && (
            <>
              <h3
                className="text-[#B8860B] mb-3"
                style={{ fontSize: "0.9rem", fontWeight: 600, letterSpacing: "0.1em" }}
              >
                الأزياء المتاحة:
              </h3>
              <div className="flex gap-3 flex-wrap mb-6">
                {service.outfits.map((o, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-[#B8860B]/20"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                  >
                    <div
                      className="w-5 h-5 rounded-full border border-[#B8860B]/30"
                      style={{ background: o.color }}
                    />
                    <span className="text-[#F5F5DC]/60 text-xs">{o.name}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          <a
            href={`https://wa.me/966500000000?text=${encodeURIComponent(`مرحباً، أود الاستفسار عن ${service.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#1a1a1a] hover:shadow-lg hover:shadow-[#B8860B]/30 transition-all duration-300"
            style={{ fontWeight: 700, fontSize: "0.95rem" }}
          >
            استفسر عن هذه الخدمة
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ServicesPage() {
  const [selected, setSelected] = useState<(typeof services)[0] | null>(null);

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
            ✦ خدمات متكاملة ✦
          </p>
          <h1
            className="text-[#F5F5DC] mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 700 }}
          >
            خدماتنا
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto mb-4" />
          <p className="text-[#F5F5DC]/55 max-w-lg mx-auto text-sm leading-relaxed">
            نقدم باقة متكاملة من خدمات الضيافة الفاخرة التي تلبي احتياجات جميع أنواع المناسبات
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelected(s)}
              className="relative rounded-3xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "16/9" }}
            >
              <ImageWithFallback
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/30 to-transparent" />

              {/* Icon */}
              <div className="absolute top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center text-[#B8860B] text-xl border border-[#B8860B]/30"
                style={{
                  background: "rgba(26,26,26,0.7)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {s.icon}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[#B8860B] mb-1" style={{ fontSize: "0.7rem", letterSpacing: "0.15em" }}>
                  {s.subtitle}
                </p>
                <h2 className="text-[#F5F5DC] mb-2" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                  {s.title}
                </h2>
                <p className="text-[#F5F5DC]/60 text-sm line-clamp-2 mb-4">{s.description}</p>

                <span
                  className="inline-flex items-center gap-2 text-[#B8860B] text-sm group-hover:gap-3 transition-all duration-300"
                  style={{ fontWeight: 500 }}
                >
                  اعرف أكثر
                  <span>←</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-3xl text-center"
          style={{
            background: "linear-gradient(135deg, rgba(184,134,11,0.08) 0%, rgba(26,26,26,0.95) 100%)",
            border: "1px solid rgba(184,134,11,0.2)",
          }}
        >
          <p className="text-[#B8860B] mb-2" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>
            ✦ زر الاستفسار السريع ✦
          </p>
          <h3 className="text-[#F5F5DC] mb-4" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
            هل تحتاج مساعدة في اختيار الخدمة المناسبة؟
          </h3>
          <p className="text-[#F5F5DC]/55 mb-6 text-sm">
            فريقنا جاهز لمساعدتك في اختيار باقة الخدمات المثالية لمناسبتك
          </p>
          <a
            href="https://wa.me/966500000000?text=مرحباً، أود الاستفسار عن خدمات الضيافة لديكم."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#1a1a1a] hover:shadow-xl hover:shadow-[#B8860B]/30 transition-all duration-300"
            style={{ fontWeight: 700, fontSize: "1rem" }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            استفسر الآن
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
