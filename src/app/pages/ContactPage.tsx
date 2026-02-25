import { useState } from "react";
import { motion } from "motion/react";

const whatsappUrl =
  "https://wa.me/966500000000?text=مرحباً، أود الاستفسار عن خدمات الضيافة لديكم.";

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send via WhatsApp
    const msg = `مرحباً، أود الاستفسار عن خدمات الضيافة لديكم.
الاسم: ${form.name}
الهاتف: ${form.phone}
البريد الإلكتروني: ${form.email}
الخدمة المطلوبة: ${form.service}
التاريخ المقترح: ${form.date}
تفاصيل إضافية: ${form.message}`;
    window.open(
      `https://wa.me/966500000000?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
    setSubmitted(true);
  };

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
            ✦ نسعد بتواصلكم ✦
          </p>
          <h1
            className="text-[#F5F5DC] mb-4"
            style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 700 }}
          >
            تواصل معنا
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#B8860B] to-transparent mx-auto mb-4" />
          <p className="text-[#F5F5DC]/55 max-w-lg mx-auto text-sm leading-relaxed">
            فريقنا جاهز لمساعدتكم في تصميم تجربة ضيافة مثالية لمناسبتكم
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-[#F5F5DC] mb-8"
              style={{ fontSize: "1.2rem", fontWeight: 700 }}
            >
              طرق التواصل المباشر
            </h2>

            <div className="space-y-4 mb-12">
              {/* WhatsApp */}
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: -5 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-300 group"
                style={{ background: "rgba(37,211,102,0.05)" }}
              >
                <div className="w-14 h-14 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#25D366]" style={{ fontWeight: 600 }}>
                    تواصل عبر واتساب
                  </p>
                  <p className="text-[#F5F5DC]/50 text-sm">ردود فورية طوال اليوم</p>
                  <p className="text-[#F5F5DC]/40 text-xs mt-1 dir-ltr text-right">
                    +966 50 000 0000
                  </p>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+966500000000"
                whileHover={{ x: -5 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-[#B8860B]/20 hover:border-[#B8860B]/40 transition-all duration-300 group"
                style={{ background: "rgba(184,134,11,0.05)" }}
              >
                <div className="w-14 h-14 rounded-full bg-[#B8860B]/15 border border-[#B8860B]/30 flex items-center justify-center text-[#B8860B] flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#B8860B]" style={{ fontWeight: 600 }}>
                    اتصل بنا مباشرة
                  </p>
                  <p className="text-[#F5F5DC]/50 text-sm">من ٨ صباحاً حتى ١٢ منتصف الليل</p>
                  <p className="text-[#F5F5DC]/40 text-xs mt-1">+966 50 000 0000</p>
                </div>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com/keifdiafa"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: -5 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-[#E1306C]/20 hover:border-[#E1306C]/40 transition-all duration-300 group"
                style={{ background: "rgba(225,48,108,0.05)" }}
              >
                <div className="w-14 h-14 rounded-full bg-[#E1306C]/15 border border-[#E1306C]/30 flex items-center justify-center text-[#E1306C] flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#E1306C]" style={{ fontWeight: 600 }}>
                    تابعونا على إنستغرام
                  </p>
                  <p className="text-[#F5F5DC]/50 text-sm">آخر أعمالنا ومشاريعنا</p>
                  <p className="text-[#F5F5DC]/40 text-xs mt-1">@keifdiafa</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:info@keifdiafa.com"
                whileHover={{ x: -5 }}
                className="flex items-center gap-4 p-5 rounded-2xl border border-[#B8860B]/15 hover:border-[#B8860B]/30 transition-all duration-300"
                style={{ background: "rgba(30,25,15,0.4)" }}
              >
                <div className="w-14 h-14 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/20 flex items-center justify-center text-[#B8860B]/70 flex-shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-7 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[#F5F5DC]/80" style={{ fontWeight: 500 }}>
                    البريد الإلكتروني
                  </p>
                  <p className="text-[#B8860B] text-sm">info@keifdiafa.com</p>
                </div>
              </motion.a>
            </div>

            {/* Service Areas */}
            <div
              className="p-5 rounded-2xl border border-[#B8860B]/15"
              style={{ background: "rgba(30,25,15,0.4)" }}
            >
              <h3 className="text-[#B8860B] mb-3" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                ✦ مناطق التغطية
              </h3>
              <div className="flex flex-wrap gap-2">
                {["الرياض", "جدة", "مكة المكرمة", "المدينة المنورة", "الدمام", "الخبر", "أبها", "تبوك"].map(
                  (city) => (
                    <span
                      key={city}
                      className="px-3 py-1 rounded-full text-[#F5F5DC]/60 text-xs border border-[#B8860B]/15"
                      style={{ background: "rgba(184,134,11,0.05)" }}
                    >
                      {city}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 rounded-3xl border border-[#B8860B]/20"
                style={{ background: "rgba(30,25,15,0.5)" }}
              >
                <div className="w-20 h-20 rounded-full bg-[#B8860B]/15 border-2 border-[#B8860B] flex items-center justify-center text-[#B8860B] text-3xl mb-6">
                  ✓
                </div>
                <h3 className="text-[#F5F5DC] mb-3" style={{ fontSize: "1.3rem", fontWeight: 700 }}>
                  شكراً لتواصلك معنا!
                </h3>
                <p className="text-[#F5F5DC]/60 text-sm mb-6">
                  تم إرسال رسالتك عبر واتساب. سيتواصل معك فريقنا في أقرب وقت ممكن.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 rounded-full border border-[#B8860B]/40 text-[#B8860B] text-sm hover:bg-[#B8860B]/10 transition-colors"
                >
                  إرسال رسالة أخرى
                </button>
              </motion.div>
            ) : (
              <div
                className="p-6 rounded-3xl border border-[#B8860B]/15"
                style={{ background: "rgba(30,25,15,0.4)" }}
              >
                <h2
                  className="text-[#F5F5DC] mb-2"
                  style={{ fontSize: "1.2rem", fontWeight: 700 }}
                >
                  نموذج الاستفسار
                </h2>
                <p className="text-[#F5F5DC]/50 text-sm mb-6">
                  سيتم إرسال رسالتك مباشرة عبر واتساب لضمان الرد السريع
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#F5F5DC]/60 text-xs mb-1.5">الاسم الكريم</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="محمد العمري"
                        className="w-full px-4 py-3 rounded-xl text-[#F5F5DC] placeholder-[#F5F5DC]/25 outline-none text-sm transition-all duration-200 focus:border-[#B8860B]/50"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(184,134,11,0.2)",
                        }}
                      />
                    </div>
                    <div>
                      <label className="block text-[#F5F5DC]/60 text-xs mb-1.5">رقم الهاتف</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+966 5X XXX XXXX"
                        className="w-full px-4 py-3 rounded-xl text-[#F5F5DC] placeholder-[#F5F5DC]/25 outline-none text-sm transition-all duration-200 focus:border-[#B8860B]/50"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(184,134,11,0.2)",
                        }}
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#F5F5DC]/60 text-xs mb-1.5">البريد الإلكتروني</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full px-4 py-3 rounded-xl text-[#F5F5DC] placeholder-[#F5F5DC]/25 outline-none text-sm transition-all duration-200 focus:border-[#B8860B]/50"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(184,134,11,0.2)",
                      }}
                      dir="ltr"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#F5F5DC]/60 text-xs mb-1.5">الخدمة المطلوبة</label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                        style={{
                          background: "#1e180a",
                          border: "1px solid rgba(184,134,11,0.2)",
                          color: form.service ? "#F5F5DC" : "rgba(245,245,220,0.3)",
                        }}
                      >
                        <option value="" disabled>
                          اختر الخدمة
                        </option>
                        <option value="ضيافة رجالية">ضيافة رجالية</option>
                        <option value="ضيافة نسائية">ضيافة نسائية</option>
                        <option value="خدمات فنية">خدمات فنية</option>
                        <option value="تأجير معدات">تأجير معدات</option>
                        <option value="باقة متكاملة">باقة متكاملة</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[#F5F5DC]/60 text-xs mb-1.5">التاريخ المقترح</label>
                      <input
                        name="date"
                        type="date"
                        value={form.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl text-[#F5F5DC]/70 outline-none text-sm transition-all duration-200 focus:border-[#B8860B]/50"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(184,134,11,0.2)",
                          colorScheme: "dark",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#F5F5DC]/60 text-xs mb-1.5">تفاصيل إضافية</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="اكتب هنا أي تفاصيل إضافية عن مناسبتك..."
                      className="w-full px-4 py-3 rounded-xl text-[#F5F5DC] placeholder-[#F5F5DC]/25 outline-none text-sm resize-none transition-all duration-200 focus:border-[#B8860B]/50"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(184,134,11,0.2)",
                      }}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-[#1a1a1a] hover:shadow-xl hover:shadow-[#B8860B]/30 transition-all duration-300 flex items-center justify-center gap-3"
                    style={{ fontWeight: 700, fontSize: "1rem" }}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    إرسال عبر واتساب
                  </motion.button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
