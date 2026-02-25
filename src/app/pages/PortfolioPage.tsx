import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImg =
  "https://images.unsplash.com/photo-1758899058841-d70f58437fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBBcmFiaWMlMjBjb2ZmZWUlMjBob3NwaXRhbGl0eSUyMGdvbGR8ZW58MXx8fHwxNzcyMDU2NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const coffeeImg =
  "https://images.unsplash.com/photo-1670351230643-27f874d17025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYXVkaSUyMEFyYWJpYyUyMHRyYWRpdGlvbmFsJTIwY29mZmVlJTIwZGFsbGFofGVufDF8fHx8MTc3MjA1NjQxMHww&ixlib=rb-4.1.0&q=80&w=1080";
const cateringImg =
  "https://images.unsplash.com/photo-1769812343266-323d6b508f24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3NwaXRhbGl0eSUyMGNhdGVyaW5nJTIwZXZlbnQlMjBzZXR1cHxlbnwxfHx8fDE3NzIwNTY0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const teaImg =
  "https://images.unsplash.com/photo-1572282924904-41bacfbd86a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwQXJhYmljJTIwdGVhJTIwc2VydmljZSUyMGNlcmVtb255fGVufDF8fHx8MTc3MjA1NjQxM3ww&ixlib=rb-4.1.0&q=80&w=1080";
const eventImg =
  "https://images.unsplash.com/photo-1720722023471-fbe5b68c3542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMHdlZGRpbmclMjBjYXRlcmluZyUyMGFyYWJpY3xlbnwxfHx8fDE3NzIwNTY0MTN8MA&ixlib=rb-4.1.0&q=80&w=1080";
const waiterImg =
  "https://images.unsplash.com/photo-1610845325460-493f99d21de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3YWl0ZXIlMjBob3NwaXRhbGl0eSUyMHVuaWZvcm0lMjBlbGVnYW50fGVufDF8fHx8MTc3MjA1NjQxM3ww&ixlib=rb-4.1.0&q=80&w=1080";
const womanImg =
  "https://images.unsplash.com/photo-1686545232018-bf8d11a36124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjB3b21hbiUyMGhvc3Rlc3MlMjBlbGVnYW50JTIwdHJhZGl0aW9uYWwlMjBkcmVzc3xlbnwxfHx8fDE3NzIwNTY0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const equipImg =
  "https://images.unsplash.com/photo-1771830933605-ffbae3e3d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXRlcmluZyUyMGVxdWlwbWVudCUyMHNpbHZlciUyMGdvbGQlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MjA1NjQxOHww&ixlib=rb-4.1.0&q=80&w=1080";
const portfolioImg =
  "https://images.unsplash.com/photo-1768508951405-10e83c4a2872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBldmVudCUyMGdhbGElMjBkaW5uZXIlMjBoYWxsJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NzIwNTY0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const kitchenImg =
  "https://images.unsplash.com/photo-1771499194141-329333b53841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWhpbmQlMjBzY2VuZXMlMjBraXRjaGVuJTIwcHJlcGFyYXRpb24lMjBwcm9mZXNzaW9uYWwlMjBjaGVmfGVufDF8fHx8MTc3MjA1NjQyMXww&ixlib=rb-4.1.0&q=80&w=1080";

type FilterType = "all" | "events" | "hospitality" | "food" | "behind";

const projects = [
  {
    id: 1,
    img: portfolioImg,
    title: "حفل شركة أرامكو السعودية",
    desc: "تجهيز وإدارة ضيافة فاخرة لحفل السنوي لأرامكو السعودية بحضور أكثر من ٥٠٠ ضيف",
    category: "events" as FilterType,
    tags: ["حفلات كبرى", "شركات"],
  },
  {
    id: 2,
    img: coffeeImg,
    title: "حفل قهوة تراثي",
    desc: "عرض صب القهوة السعودية بالطريقة التقليدية",
    category: "hospitality" as FilterType,
    tags: ["قهوة", "تراثي"],
  },
  {
    id: 3,
    img: eventImg,
    title: "حفل زفاف فاخر",
    desc: "ضيافة متكاملة لحفل زفاف راقٍ بمنطقة الرياض",
    category: "events" as FilterType,
    tags: ["زفاف", "رياض"],
  },
  {
    id: 4,
    img: cateringImg,
    title: "مؤتمر رجال الأعمال",
    desc: "تجهيز قاعات وتقديم ضيافة متميزة لمؤتمر كبار المستثمرين",
    category: "events" as FilterType,
    tags: ["مؤتمرات", "أعمال"],
  },
  {
    id: 5,
    img: teaImg,
    title: "جلسة شاي فاخرة",
    desc: "تقديم الشاي الفاخر بأساليب إبداعية في مناسبة نسائية",
    category: "food" as FilterType,
    tags: ["شاي", "نسائي"],
  },
  {
    id: 6,
    img: waiterImg,
    title: "خدمة الضيافة الرجالية",
    desc: "فريق المضيفين الرجاليين في حفل ملكي فاخر",
    category: "hospitality" as FilterType,
    tags: ["خدمة", "رجالي"],
  },
  {
    id: 7,
    img: kitchenImg,
    title: "خلف الكواليس - التحضير",
    desc: "لقطة من عملية التحضير والتجهيز قبيل إحدى الفعاليات الكبرى",
    category: "behind" as FilterType,
    tags: ["كواليس", "تحضير"],
  },
  {
    id: 8,
    img: womanImg,
    title: "فريق الضيافة النسائية",
    desc: "مضيفاتنا المتميزات في حفل عيد الميلاد الخمسين لإحدى الشركات",
    category: "hospitality" as FilterType,
    tags: ["نسائي", "احتفالية"],
  },
  {
    id: 9,
    img: equipImg,
    title: "معدات التقديم الفاخرة",
    desc: "عرض لأرقى المعدات الذهبية المستخدمة في الفعاليات الملكية",
    category: "food" as FilterType,
    tags: ["معدات", "ذهبي"],
  },
  {
    id: 10,
    img: heroImg,
    title: "تقديمات موسم الرياض",
    desc: "مشاركتنا في موسم الرياض وتقديم تجربة ضيافة استثنائية",
    category: "events" as FilterType,
    tags: ["موسم الرياض", "فعاليات"],
  },
  {
    id: 11,
    img: coffeeImg,
    title: "خلف الكواليس - القهوة",
    desc: "لحظات التحضير والإعداد لأرقى أنواع القهوة العربية",
    category: "behind" as FilterType,
    tags: ["كواليس", "قهوة"],
  },
  {
    id: 12,
    img: portfolioImg,
    title: "حفل حكومي رسمي",
    desc: "ضيافة حفل حكومي رسمي بحضور كبار المسؤولين",
    category: "events" as FilterType,
    tags: ["حكومي", "رسمي"],
  },
];

const filters: { id: FilterType; label: string }[] = [
  { id: "all", label: "الكل" },
  { id: "events", label: "الفعاليات" },
  { id: "hospitality", label: "الضيافة" },
  { id: "food", label: "التقديمات" },
  { id: "behind", label: "خلف الكواليس" },
];

function PortfolioItem({
  project,
}: {
  project: (typeof projects)[0];
}) {
  const [pressed, setPressed] = useState(false);
  const pressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleMouseDown = () => {
    pressTimer.current = setTimeout(() => setPressed(true), 500);
  };
  const handleMouseUp = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
    if (pressed) {
      setShowDetail(true);
      setPressed(false);
    }
  };
  const handleTouchStart = () => {
    pressTimer.current = setTimeout(() => {
      setPressed(true);
      setShowDetail(true);
    }, 500);
  };
  const handleTouchEnd = () => {
    if (pressTimer.current) clearTimeout(pressTimer.current);
    setPressed(false);
  };

  useEffect(() => {
    return () => {
      if (pressTimer.current) clearTimeout(pressTimer.current);
    };
  }, []);

  return (
    <>
      <motion.div
        className="relative rounded-xl overflow-hidden cursor-pointer group mb-4"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => {
          if (pressTimer.current) clearTimeout(pressTimer.current);
          setPressed(false);
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        whileHover={{ scale: 1.02 }}
        animate={pressed ? { scale: 0.97 } : {}}
        onClick={() => setShowDetail(true)}
      >
        <ImageWithFallback
          src={project.img}
          alt={project.title}
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="text-[#F5F5DC] text-sm" style={{ fontWeight: 600 }}>
            {project.title}
          </h3>
          <div className="flex gap-1 mt-1 flex-wrap">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-[#B8860B] px-2 py-0.5 rounded-full border border-[#B8860B]/30"
                style={{ fontSize: "0.65rem", background: "rgba(26,26,26,0.7)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        {pressed && (
          <div className="absolute inset-0 bg-[#B8860B]/10 flex items-center justify-center">
            <div className="text-[#B8860B] text-3xl">✦</div>
          </div>
        )}
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setShowDetail(false)}
          >
            <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-lg w-full rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #242015 0%, #1a1a1a 100%)",
                border: "1px solid rgba(184,134,11,0.3)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-60">
                <ImageWithFallback
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1a]" />
                <button
                  onClick={() => setShowDetail(false)}
                  className="absolute top-4 left-4 w-9 h-9 rounded-full bg-[#1a1a1a]/80 border border-[#B8860B]/30 text-[#F5F5DC]/60 hover:text-[#B8860B] flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <div className="flex gap-2 flex-wrap mb-3">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full border border-[#B8860B]/30 text-[#B8860B]"
                      style={{ fontSize: "0.7rem", background: "rgba(184,134,11,0.08)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="text-[#F5F5DC] mb-3" style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                  {project.title}
                </h2>
                <p className="text-[#F5F5DC]/65 text-sm leading-relaxed mb-6">{project.desc}</p>
                <a
                  href="https://wa.me/966500000000?text=مرحباً، أود الاستفسار عن خدمات الضيافة لديكم."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#1a1a1a] transition-all duration-300 hover:shadow-lg hover:shadow-[#B8860B]/30"
                  style={{ fontWeight: 700, fontSize: "0.95rem" }}
                >
                  احجز خدمة مماثلة
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filtered =
    activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

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
            ✦ الدليل البصري ✦
          </p>
          <h1
            className="text-[#F5F5DC] mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 700 }}
          >
            معرض أعمالنا
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto mb-4" />
          <p className="text-[#F5F5DC]/55 max-w-lg mx-auto text-sm leading-relaxed">
            لحظات من إبداعاتنا وأعمالنا المتميزة في عالم الضيافة الفاخرة
          </p>
          <p className="text-[#B8860B]/60 text-xs mt-2">
            اضغط مطولاً على أي صورة لمعاينتها
          </p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <div className="flex gap-2 flex-wrap justify-center">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === f.id
                  ? "bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#1a1a1a] shadow-lg shadow-[#B8860B]/30"
                  : "border border-[#B8860B]/20 text-[#F5F5DC]/60 hover:border-[#B8860B]/40 hover:text-[#B8860B]"
              }`}
              style={{ fontWeight: activeFilter === f.id ? 700 : 400 }}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 1024: 4 }}>
              <Masonry>
                {filtered.map((project) => (
                  <PortfolioItem key={project.id} project={project} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
