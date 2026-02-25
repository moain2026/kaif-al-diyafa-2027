import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

const offerings = [
  {
    id: 1,
    title: "التمور الفاخرة",
    image: "https://images.unsplash.com/photo-1629782666026-04093129d0e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRlcyUyMGFyYWJpYyUyMGZvb2QlMjBsdXh1cnl8ZW58MXx8fHwxNzcyMDU2MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "تشكيلة من أجود أنواع التمور المحشوة بالمكسرات والشوكلاتة."
  },
  {
    id: 2,
    title: "المشروبات الساخنة",
    image: "https://images.unsplash.com/photo-1617995815236-7f06f6e53180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGNvZmZlZSUyMGx1eHVyeSUyMGhvc3BpdGFsaXR5fGVufDF8fHx8MTc3MjA1NjA2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "قهوة سعودية، شاي، كرك، وأنواع متعددة من المشروبات الساخنة الفاخرة."
  },
  {
    id: 3,
    title: "الحلويات الشرقية",
    image: "https://images.unsplash.com/photo-1728970383255-9a912a738763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjBzd2VldHMlMjBsdXh1cnl8ZW58MXx8fHwxNzcyMDU2MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "كنافة، بقلاوة، ومعمول صنع منزلي بأعلى معايير الجودة."
  },
  {
    id: 4,
    title: "المشروبات الباردة",
    image: "https://images.unsplash.com/photo-1771387569220-061cb022e715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGJsYWNrJTIwZ29sZHxlbnwxfHx8fDE3NzIwNTYwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "عصائر طبيعية وموهيتو منعش بألوان ونكهات متعددة."
  }
];

export default function Offerings() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5DC] mb-6">تقديماتنا</h1>
          <p className="text-[#F5F5DC]/60 max-w-2xl mx-auto text-lg">
            ننتقي لكم ألذ الأصناف وأجودها، لنقدمها بطريقة فنية تليق بذائقتكم الرفيعة.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1a1a1a] rounded-xl overflow-hidden border border-white/5 hover:border-[#B8860B]/30 transition-all group"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#F5F5DC] mb-2">{item.title}</h3>
                <p className="text-[#F5F5DC]/60 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <button className="text-[#B8860B] text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  عرض التفاصيل <ArrowLeft size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
