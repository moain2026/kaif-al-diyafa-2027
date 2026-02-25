import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const heroImg =
  "https://images.unsplash.com/photo-1758899058841-d70f58437fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBBcmFiaWMlMjBjb2ZmZWUlMjBob3NwaXRhbGl0eSUyMGdvbGR8ZW58MXx8fHwxNzcyMDU2NDA5fDA&ixlib=rb-4.1.0&q=80&w=1080";
const coffeeImg =
  "https://images.unsplash.com/photo-1670351230643-27f874d17025?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYXVkaSUyMEFyYWJpYyUyMHRyYWRpdGlvbmFsJTIwY29mZmVlJTIwZGFsbGFofGVufDF8fHx8MTc3MjA1NjQxMHww&ixlib=rb-4.1.0&q=80&w=1080";
const teamImg =
  "https://images.unsplash.com/photo-1610845325460-493f99d21de9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3YWl0ZXIlMjBob3NwaXRhbGl0eSUyMHVuaWZvcm0lMjBlbGVnYW50fGVufDF8fHx8MTc3MjA1NjQxM3ww&ixlib=rb-4.1.0&q=80&w=1080";

const values = [
  {
    icon: "✦",
    title: "الجودة أولاً",
    desc: "نلتزم بأعلى معايير الجودة في كل تفصيلة من تفاصيل خدماتنا",
  },
  {
    icon: "◈",
    title: "الأصالة والهوية",
    desc: "نفخر بتراثنا العربي الأصيل ونعكسه في كل لحظة ضيافة",
  },
  {
    icon: "❋",
    title: "الاحترافية",
    desc: "فريقنا مدرب على أعلى مستوى من الاحترافية والتميز",
  },
  {
    icon: "◇",
    title: "الابتكار",
    desc: "نجمع بين الأصالة والحداثة لنقدم تجارب ضيافة فريدة ومبتكرة",
  },
];

const team = [
  { name: "محمد العمري", role: "المدير التنفيذي", img: teamImg },
  { name: "سعود الشمري", role: "مدير العمليات", img: coffeeImg },
  { name: "خالد الزهراني", role: "مدير الجودة", img: heroImg },
];

const milestones = [
  { year: "2016", event: "تأسيس كيف الضيافة بالرياض" },
  { year: "2018", event: "توسع الخدمات لتشمل المنطقة الغربية" },
  { year: "2020", event: "تجاوزنا ١٠٠ مناسبة ناجحة" },
  { year: "2022", event: "المشاركة في موسم الرياض الكبير" },
  { year: "2024", event: "أكثر من ٥٠٠ مناسبة وعملاء في كل أنحاء المملكة" },
  { year: "2026", event: "إطلاق المنصة الرقمية الفاخرة" },
];

export function AboutPage() {
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
            ✦ قصتنا ✦
          </p>
          <h1
            className="text-[#F5F5DC] mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 700 }}
          >
            من نحن
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto" />
        </motion.div>
      </div>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-3xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <ImageWithFallback
                src={heroImg}
                alt="كيف الضيافة"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent" />
              {/* Gold frame decoration */}
              <div className="absolute top-4 right-4 bottom-4 left-4 border border-[#B8860B]/20 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-[#B8860B] mb-3"
              style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}
            >
              ✦ رؤيتنا ✦
            </p>
            <h2
              className="text-[#F5F5DC] mb-5"
              style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 700 }}
            >
              رحلة من الشغف نحو الفخامة
            </h2>
            <div className="space-y-4 text-[#F5F5DC]/65 text-sm leading-relaxed">
              <p>
                انطلقت "كيف الضيافة" من رؤية واضحة: تحويل كل مناسبة إلى تجربة لا تُنسى تجمع بين
                الأصالة العربية الأصيلة وأرقى معايير الفخامة المعاصرة.
              </p>
              <p>
                منذ تأسيسنا عام ٢٠١٦، قدمنا خدماتنا لأكثر من ٥٠٠ مناسبة في مختلف أرجاء المملكة
                العربية السعودية، من حفلات الزفاف الفاخرة إلى الفعاليات الحكومية الكبرى.
              </p>
              <p>
                فلسفتنا بسيطة: "البساطة هي قمة التعقيد"، ونؤمن بأن التفاصيل الصغيرة هي التي
                تصنع الفارق وتترك الأثر العميق في نفوس ضيوفكم.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[#B8860B] mb-2"
              style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}
            >
              ✦ ما يميزنا ✦
            </p>
            <h2
              className="text-[#F5F5DC]"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700 }}
            >
              قيمنا ومبادئنا
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl border border-[#B8860B]/15 hover:border-[#B8860B]/30 transition-all duration-300"
                style={{ background: "rgba(30,25,15,0.5)" }}
              >
                <div
                  className="text-[#B8860B] mx-auto mb-4 w-14 h-14 rounded-full border border-[#B8860B]/30 flex items-center justify-center"
                  style={{ fontSize: "1.6rem", background: "rgba(184,134,11,0.08)" }}
                >
                  {v.icon}
                </div>
                <h3
                  className="text-[#F5F5DC] mb-2"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  {v.title}
                </h3>
                <p className="text-[#F5F5DC]/55 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[#B8860B] mb-2"
              style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}
            >
              ✦ مسيرتنا ✦
            </p>
            <h2
              className="text-[#F5F5DC]"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700 }}
            >
              محطات مضيئة
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto mt-3" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute right-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#B8860B]/60 via-[#B8860B]/30 to-transparent" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-6 pr-14 relative"
                >
                  {/* Dot */}
                  <div className="absolute right-4 top-1.5 w-5 h-5 rounded-full bg-[#1a1a1a] border-2 border-[#B8860B] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#B8860B]" />
                  </div>

                  <div
                    className="p-4 rounded-xl border border-[#B8860B]/15 flex-1"
                    style={{ background: "rgba(30,25,15,0.4)" }}
                  >
                    <span
                      className="text-[#B8860B] block mb-1"
                      style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em" }}
                    >
                      {m.year}
                    </span>
                    <p className="text-[#F5F5DC]/75 text-sm">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-[#141414]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[#B8860B] mb-2"
              style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}
            >
              ✦ خبراء الضيافة ✦
            </p>
            <h2
              className="text-[#F5F5DC]"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700 }}
            >
              فريق القيادة
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center group"
              >
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-2 border-[#B8860B]/30 group-hover:border-[#B8860B] transition-all duration-300">
                  <ImageWithFallback
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3
                  className="text-[#F5F5DC]"
                  style={{ fontSize: "1rem", fontWeight: 600 }}
                >
                  {member.name}
                </h3>
                <p className="text-[#B8860B] text-sm mt-1">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications placeholder */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[#B8860B] mb-2" style={{ fontSize: "0.8rem", letterSpacing: "0.2em" }}>
            ✦ موثوقيتنا ✦
          </p>
          <h2
            className="text-[#F5F5DC] mb-10"
            style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700 }}
          >
            شهادات الجودة
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "ISO 9001:2015",
              "شهادة التميز السعودي",
              "عضو الغرفة التجارية",
              "شريك رؤية 2030",
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-2xl border border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-300"
                style={{ background: "rgba(30,25,15,0.4)" }}
              >
                <div
                  className="text-[#B8860B] text-2xl mb-3"
                  style={{ lineHeight: 1 }}
                >
                  ✦
                </div>
                <p className="text-[#F5F5DC]/70 text-sm" style={{ fontWeight: 500 }}>
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
