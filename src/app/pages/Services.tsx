import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "الضيافة الرجالية",
    image: "https://images.unsplash.com/photo-1688487197602-9c40fa317e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWl0ZXIlMjBzZXJ2aW5nJTIwY29mZmVlfGVufDF8fHx8MTc3MjA1NjA2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "نقدم خدمة ضيافة رجالية متكاملة بزي سعودي أصيل، مع أجود أنواع القهوة والشاي."
  },
  {
    id: 2,
    title: "الضيافة النسائية",
    image: "https://images.unsplash.com/photo-1728970383255-9a912a738763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmFiaWMlMjBzd2VldHMlMjBsdXh1cnl8ZW58MXx8fHwxNzcyMDU2MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "طاقم نسائي مدرب على أعلى مستوى لتقديم الضيافة في المناسبات النسائية الخاصة."
  },
  {
    id: 3,
    title: "المعدات والتجهيزات",
    image: "https://images.unsplash.com/photo-1617995815236-7f06f6e53180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGNvZmZlZSUyMGx1eHVyeSUyMGhvc3BpdGFsaXR5fGVufDF8fHx8MTc3MjA1NjA2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "أرقى معدات التقديم، الدلال، والفناجين التي تضفي لمسة من الفخامة على مناسبتكم."
  },
  {
    id: 4,
    title: "الضيافة الفنية",
    image: "https://images.unsplash.com/photo-1771387569220-061cb022e715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBldmVudCUyMGJsYWNrJTIwZ29sZHxlbnwxfHx8fDE3NzIwNTYwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    desc: "عروض تقديم فنية ومبتكرة تناسب الحفلات الكبرى والمناسبات الرسمية."
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5DC] mb-6">خدماتنا المميزة</h1>
          <p className="text-[#F5F5DC]/60 max-w-2xl mx-auto text-lg">
            نقدم باقة متكاملة من خدمات الضيافة التي تلبي كافة احتياجاتكم في مختلف المناسبات.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-[#F5F5DC] mb-2">{service.title}</h3>
                <p className="text-[#F5F5DC]/80 mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {service.desc}
                </p>
                <div className="flex items-center gap-2 text-[#B8860B] font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <span>تفاصيل أكثر</span>
                  <ArrowLeft size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
