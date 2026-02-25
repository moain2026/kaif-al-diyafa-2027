import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <section className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5DC] mb-6">قصة كيف الضيافة</h1>
                    <div className="w-24 h-1 bg-[#B8860B] mb-8"></div>
                    <p className="text-[#F5F5DC]/80 text-lg leading-loose mb-6">
                        بدأت رحلتنا من شغف عميق بتقاليد الضيافة العربية الأصيلة، ورغبة ملحة في تقديمها بأسلوب يواكب تطور العصر. في "كيف الضيافة"، نؤمن أن الضيافة ليست مجرد تقديم قهوة أو شاي، بل هي تجربة متكاملة من الترحيب والدفء والاهتمام بأدق التفاصيل.
                    </p>
                    <p className="text-[#F5F5DC]/80 text-lg leading-loose">
                        نسعى دائماً لنكون الخيار الأول لمن يبحث عن التميز والفخامة في مناسباته، مدعومين بفريق عمل محترف وخبرة واسعة في إدارة الفعاليات والمناسبات.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10">
                        <img 
                            src="https://images.unsplash.com/photo-1688487197602-9c40fa317e74?auto=format&fit=crop&w=800&q=80" 
                            alt="About Us" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#1a1a1a] p-4 rounded-xl border border-white/5 shadow-xl hidden md:block">
                        <div className="w-full h-full border border-[#B8860B] flex items-center justify-center flex-col text-center">
                            <span className="text-4xl font-bold text-[#B8860B] mb-1">+10</span>
                            <span className="text-[#F5F5DC]/60 text-sm">سنوات من<br/>الخبرة والتميز</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* Values */}
        <section>
            <h2 className="text-3xl font-bold text-[#F5F5DC] mb-12 text-center">قيمنا</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {title: "الأصالة", desc: "نحافظ على هويتنا وتراثنا في كل تفصيل."},
                    {title: "الجودة", desc: "نلتزم بأعلى معايير الجودة في منتجاتنا وخدماتنا."},
                    {title: "الاحترافية", desc: "فريق عمل مدرب ومؤهل لتقديم أفضل خدمة."}
                ].map((val, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-[#1a1a1a] p-8 rounded-xl border border-white/5 text-center hover:bg-[#212121] transition-colors"
                    >
                        <h3 className="text-xl font-bold text-[#B8860B] mb-4">{val.title}</h3>
                        <p className="text-[#F5F5DC]/70">{val.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}
