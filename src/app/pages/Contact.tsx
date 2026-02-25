import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-24 pb-12 min-h-screen">
       <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F5DC] mb-6">تواصل معنا</h1>
          <p className="text-[#F5F5DC]/60 max-w-2xl mx-auto text-lg">
            نحن هنا لخدمتكم والإجابة على استفساراتكم لتنظيم مناسبتكم القادمة.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#1a1a1a] p-8 rounded-2xl border border-white/5"
            >
                <h3 className="text-2xl font-bold text-[#F5F5DC] mb-6">أرسل لنا رسالة</h3>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm text-[#F5F5DC]/70">الاسم</label>
                            <input type="text" className="w-full bg-[#212121] border border-white/10 rounded-lg p-3 text-[#F5F5DC] focus:border-[#B8860B] focus:outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm text-[#F5F5DC]/70">رقم الجوال</label>
                            <input type="tel" className="w-full bg-[#212121] border border-white/10 rounded-lg p-3 text-[#F5F5DC] focus:border-[#B8860B] focus:outline-none transition-colors" dir="ltr" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-[#F5F5DC]/70">نوع المناسبة</label>
                        <select className="w-full bg-[#212121] border border-white/10 rounded-lg p-3 text-[#F5F5DC] focus:border-[#B8860B] focus:outline-none transition-colors">
                            <option>حفل زفاف</option>
                            <option>مناسبة خاصة</option>
                            <option>فعالية شركات</option>
                            <option>أخرى</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-[#F5F5DC]/70">الرسالة</label>
                        <textarea rows={4} className="w-full bg-[#212121] border border-white/10 rounded-lg p-3 text-[#F5F5DC] focus:border-[#B8860B] focus:outline-none transition-colors"></textarea>
                    </div>
                    <button type="button" className="w-full bg-[#B8860B] text-white py-4 rounded-lg font-bold hover:bg-[#a0740a] transition-colors">
                        إرسال
                    </button>
                </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-[#B8860B]/30 transition-colors">
                        <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center text-[#B8860B]">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#F5F5DC]">اتصل بنا</h4>
                            <p className="text-[#F5F5DC]/60 text-sm mt-1" dir="ltr">+966 50 000 0000</p>
                        </div>
                    </div>
                    <div className="bg-[#1a1a1a] p-6 rounded-xl border border-white/5 flex flex-col items-center text-center gap-4 hover:border-[#B8860B]/30 transition-colors">
                        <div className="w-12 h-12 bg-[#B8860B]/10 rounded-full flex items-center justify-center text-[#B8860B]">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-[#F5F5DC]">البريد الإلكتروني</h4>
                            <p className="text-[#F5F5DC]/60 text-sm mt-1">info@keifaldiafa.com</p>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-[#1a1a1a] rounded-2xl overflow-hidden h-64 md:h-80 border border-white/5 relative">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232053.86877292212!2d46.54228913969421!3d24.725287669383827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1708890000000!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{border:0, filter: 'grayscale(100%) invert(92%) contrast(83%)'}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                     <div className="absolute inset-0 pointer-events-none border border-white/10 rounded-2xl"></div>
                </div>
            </motion.div>
        </div>
       </div>
    </div>
  );
}
