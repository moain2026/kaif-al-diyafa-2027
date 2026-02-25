import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
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
const equipImg =
  "https://images.unsplash.com/photo-1771830933605-ffbae3e3d1b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXRlcmluZyUyMGVxdWlwbWVudCUyMHNpbHZlciUyMGdvbGQlMjBzZXJ2aWNlfGVufDF8fHx8MTc3MjA1NjQxOHww&ixlib=rb-4.1.0&q=80&w=1080";

const whyCards = [
  {
    icon: "✦",
    title: "خبرة متميزة",
    desc: "سنوات من الخبرة في تقديم خدمات الضيافة الفاخرة للمناسبات الكبرى والحفلات الراقية",
  },
  {
    icon: "◈",
    title: "فريق احترافي",
    desc: "كوادر مدربة على أعلى مستوى من الاحتراف والأناقة لضمان تجربة لا تُنسى",
  },
  {
    icon: "❋",
    title: "تقديمات فاخرة",
    desc: "أرقى التقديمات من قهوة سعودية وشاي وحلويات فاخرة وتوزيعات متنوعة",
  },
  {
    icon: "◇",
    title: "تغطية شاملة",
    desc: "نغطي جميع مناطق المملكة العربية السعودية بأسطول متكامل من المعدات الفاخرة",
  },
];

const moments = [
  { img: coffeeImg, title: "القهوة السعودية الأصيلة", category: "مشروبات حارة" },
  { img: cateringImg, title: "تجهيزات المناسبات الكبرى", category: "خدمات الضيافة" },
  { img: teaImg, title: "جلسات الشاي الفاخرة", category: "مشروبات" },
  { img: waiterImg, title: "فريق الضيافة المحترف", category: "الخدمات الرجالية" },
  { img: eventImg, title: "حفلات الزفاف الفاخرة", category: "مناسبات" },
  { img: equipImg, title: "معدات التقديم الراقية", category: "المعدات" },
];

const testimonials = [
  {
    name: "أحمد العمري",
    role: "مدير فعاليات",
    text: "كيف الضيافة رفعت مستوى مناسباتنا إلى آفاق جديدة. الاحترافية والفخامة في كل تفصيلة.",
    rating: 5,
  },
  {
    name: "نورة الشمري",
    role: "صاحبة مناسبة",
    text: "تجربة لا تُنسى، من أول لحظة حتى آخر لحظة. الفريق محترف وودود والتقديمات رائعة.",
    rating: 5,
  },
  {
    name: "فيصل الزهراني",
    role: "رجل أعمال",
    text: "اعتمدنا على كيف الضيافة في جميع فعاليات شركتنا. لم نخيب ظننا أبداً.",
    rating: 5,
  },
];

const partners = [
  "شركة الراجحي",
  "أرامكو السعودية",
  "مجموعة بن لادن",
  "فندق الريتز كارلتون",
  "مطار الملك عبدالعزيز",
  "هيئة الأفلام",
  "موسم الرياض",
  "نيوم",
];

function SectionTitle({
  title,
  subtitle,
  center = true,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p
          className={`text-[#B8860B] mb-2 ${center ? "text-center" : ""}`}
          style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}
        >
          ✦ {subtitle || "كيف الضيافة"} ✦
        </p>
        <h2
          className={`text-[#F5F5DC] ${center ? "text-center" : ""}`}
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 700 }}
        >
          {title}
        </h2>
        <div
          className={`mt-3 h-px bg-gradient-to-r from-transparent via-[#B8860B] to-transparent ${center ? "mx-auto" : ""}`}
          style={{ width: "120px" }}
        />
      </motion.div>
    </div>
  );
}

export function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div>
      {/* ── Hero Section ── */}
      <div ref={heroRef} className="relative h-screen min-h-[600px] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          <ImageWithFallback
            src={heroImg}
            alt="كيف الضيافة"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/40 to-[#1a1a1a]" />

        {/* Decorative gold lines */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 50%, rgba(184,134,11,0.08) 0%, transparent 70%)",
          }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
          style={{ opacity: heroOpacity }}
        >
          {/* Arabic pattern decoration */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#B8860B] mb-4"
            style={{ fontSize: "0.85rem", letterSpacing: "0.3em" }}
          >
            ✦ ✦ ✦
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[#F5F5DC] mb-3"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              textShadow: "0 2px 20px rgba(0,0,0,0.5)",
            }}
          >
            كيف الضيافة
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#B8860B] mb-2"
            style={{ fontSize: "clamp(1rem, 3vw, 1.4rem)", fontWeight: 300, letterSpacing: "0.1em" }}
          >
            KEIF AL-DIAFA
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-[#F5F5DC]/70 max-w-lg mb-10"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", lineHeight: 1.8 }}
          >
            منصة تجربة فاخرة تعكس جودة وفخامة خدمات الضيافة السعودية الأصيلة
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <Link
              to="/services"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#1a1a1a] hover:shadow-xl hover:shadow-[#B8860B]/40 transition-all duration-300 hover:-translate-y-0.5"
              style={{ fontWeight: 700, fontSize: "1rem" }}
            >
              اكتشف خدماتنا
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-3 rounded-full border border-[#B8860B]/50 text-[#B8860B] hover:bg-[#B8860B]/10 transition-all duration-300"
              style={{ fontWeight: 500, fontSize: "1rem" }}
            >
              معرض أعمالنا
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-10"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-[#B8860B]/40 flex items-start justify-center pt-2">
              <div className="w-1 h-2 rounded-full bg-[#B8860B]" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="bg-gradient-to-r from-[#B8860B]/10 via-[#B8860B]/5 to-[#B8860B]/10 border-y border-[#B8860B]/20 py-6">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { num: "+500", label: "مناسبة ناجحة" },
            { num: "+50", label: "شريك موثوق" },
            { num: "+200", label: "عميل راضٍ" },
            { num: "8+", label: "سنوات خبرة" },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p
                className="text-[#B8860B]"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700 }}
              >
                {s.num}
              </p>
              <p className="text-[#F5F5DC]/60 text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Why Keif Section ── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <SectionTitle title="لماذا كيف الضيافة؟" subtitle="مزايانا التنافسية" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyCards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative p-6 rounded-2xl border border-[#B8860B]/15 overflow-hidden group"
              style={{
                background:
                  "linear-gradient(135deg, rgba(40,35,25,0.8) 0%, rgba(26,26,26,0.95) 100%)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full bg-[#B8860B]/5 group-hover:bg-[#B8860B]/10 transition-colors duration-300" />

              <div
                className="text-[#B8860B] mb-4 relative z-10"
                style={{ fontSize: "2rem", lineHeight: 1 }}
              >
                {card.icon}
              </div>
              <h3
                className="text-[#F5F5DC] mb-3 relative z-10"
                style={{ fontSize: "1.05rem", fontWeight: 600 }}
              >
                {card.title}
              </h3>
              <p className="text-[#F5F5DC]/55 text-sm leading-relaxed relative z-10">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Featured Moments ── */}
      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="لحظاتنا المميزة" subtitle="من أعمالنا" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {moments.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="relative rounded-2xl overflow-hidden group cursor-pointer"
                style={{ aspectRatio: "4/3" }}
              >
                <ImageWithFallback
                  src={m.img}
                  alt={m.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/20 to-transparent" />

                {/* Category tag */}
                <div className="absolute top-4 right-4">
                  <span
                    className="px-3 py-1 rounded-full text-[#B8860B] border border-[#B8860B]/40"
                    style={{
                      fontSize: "0.7rem",
                      background: "rgba(26,26,26,0.8)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {m.category}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="text-[#F5F5DC]"
                    style={{ fontSize: "1.05rem", fontWeight: 600 }}
                  >
                    {m.title}
                  </h3>
                  <div className="mt-2 h-0.5 w-0 group-hover:w-full bg-[#B8860B] transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#B8860B]/40 text-[#B8860B] hover:bg-[#B8860B]/10 transition-all duration-300"
              style={{ fontWeight: 500 }}
            >
              عرض المزيد من الأعمال
              <span>←</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="py-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="شركاء النجاح" subtitle="نثق بهم ويثقون بنا" />
        </div>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10" />
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10" />

          <motion.div
            className="flex gap-8 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-8 py-4 rounded-xl border border-[#B8860B]/15 text-[#F5F5DC]/50 hover:text-[#B8860B] hover:border-[#B8860B]/40 transition-all duration-300 cursor-pointer whitespace-nowrap"
                style={{
                  background: "rgba(30,25,15,0.5)",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                {p}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-4 bg-[#141414]">
        <div className="max-w-5xl mx-auto">
          <SectionTitle title="آراء عملائنا" subtitle="ثقتكم تُلهمنا" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="p-6 rounded-2xl border border-[#B8860B]/15 relative"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(40,35,25,0.8) 0%, rgba(26,26,26,0.95) 100%)",
                }}
              >
                {/* Quote */}
                <div
                  className="text-[#B8860B]/30 mb-4"
                  style={{ fontSize: "3rem", lineHeight: 1, fontFamily: "serif" }}
                >
                  "
                </div>
                <p className="text-[#F5F5DC]/70 text-sm leading-relaxed mb-5">"{t.text}"</p>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <span key={si} className="text-[#B8860B]" style={{ fontSize: "0.9rem" }}>
                      ★
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B8860B]/30 to-[#B8860B]/10 border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B]">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-[#F5F5DC]" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                      {t.name}
                    </p>
                    <p className="text-[#F5F5DC]/40 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Contact Section ── */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#B8860B] mb-3" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>
              ✦ ابدأ رحلتك معنا ✦
            </p>
            <h2
              className="text-[#F5F5DC] mb-5"
              style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700 }}
            >
              جاهزون لإضافة لمسة فخامة لمناسبتك
            </h2>
            <p className="text-[#F5F5DC]/60 mb-10 leading-relaxed">
              تواصل معنا الآن واحصل على استشارة مجانية لتصميم تجربة ضيافة لا تُنسى
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a
                href="https://wa.me/966500000000?text=مرحباً، أود الاستفسار عن خدمات الضيافة لديكم."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] text-white hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5"
                style={{ fontWeight: 700, fontSize: "1rem" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                تواصل عبر واتساب
              </motion.a>

              <motion.a
                href="tel:+966500000000"
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-[#B8860B]/40 text-[#B8860B] hover:bg-[#B8860B]/10 transition-all duration-300"
                style={{ fontWeight: 500, fontSize: "1rem" }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                اتصل بنا الآن
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
