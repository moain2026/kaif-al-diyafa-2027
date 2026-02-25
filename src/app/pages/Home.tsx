import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Star, Coffee, Award, Users } from 'lucide-react';
import { Link } from 'react-router';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image simulating Video/Cinemagraph */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1617995815236-7f06f6e53180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXVkaSUyMGNvZmZlZSUyMGx1eHVyeSUyMGhvc3BpdGFsaXR5fGVufDF8fHx8MTc3MjA1NjA2Nnww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Saudi Hospitality" 
          className="w-full h-full object-cover brightness-50"
        />
      </motion.div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-[#212121] via-transparent to-transparent z-10" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto space-y-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-[#F5F5DC] leading-tight"
        >
          أصالة الضيافة <br /> <span className="text-[#B8860B]">بلمسة عصرية</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-[#F5F5DC]/80 font-light max-w-2xl mx-auto"
        >
          نصنع تجربة ضيافة فاخرة تليق بكم وبضيوفكم، نمزج فيها عبق الماضي برقي الحاضر.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 bg-[#B8860B] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#a0740a] transition-colors shadow-lg shadow-[#B8860B]/20 group"
          >
            <span>اكتشف خدماتنا</span>
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Coffee size={32} className="text-[#B8860B]" />,
      title: "قهوة سعودية أصيلة",
      desc: "نختار أجود أنواع البن ونحمصها بعناية لنقدم لكم مذاقاً لا يُنسى."
    },
    {
      icon: <Users size={32} className="text-[#B8860B]" />,
      title: "طاقم محترف",
      desc: "فريق مدرب على أعلى مستويات الخدمة والضيافة واللباقة."
    },
    {
      icon: <Award size={32} className="text-[#B8860B]" />,
      title: "جودة لا تضاهى",
      desc: "نلتزم بأعلى معايير الجودة في كل تفاصيل ضيافتكم."
    }
  ];

  return (
    <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-[#212121] p-8 rounded-2xl border border-white/5 hover:border-[#B8860B]/30 transition-colors group"
            >
              <div className="mb-6 bg-[#B8860B]/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-[#B8860B]/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5DC] mb-4">{feature.title}</h3>
              <p className="text-[#F5F5DC]/60 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <section className="py-24 bg-[#212121] relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#B8860B] mb-16">ماذا يقول عملاؤنا</h2>
        
        <Slider {...settings} className="cursor-grab active:cursor-grabbing">
          {[1, 2, 3].map((i) => (
            <div key={i} className="px-4 pb-12">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, starIdx) => (
                  <Star key={starIdx} size={20} className="text-[#B8860B] fill-current" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-[#F5F5DC] italic leading-relaxed mb-8">
                "تجربة استثنائية بكل المقاييس. طاقم العمل كان في قمة الاحترافية، والقهوة كانت ممتازة. شكراً لكم على جعل مناسبتنا ذكرى جميلة."
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-600 overflow-hidden">
                   {/* Placeholder avatar */}
                   <div className="w-full h-full bg-[#B8860B]" />
                </div>
                <div className="text-right">
                  <h4 className="font-bold text-[#F5F5DC]">عميل مميز {i}</h4>
                  <span className="text-sm text-[#F5F5DC]/50">الرياض</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const Partners = () => {
    return (
        <section className="py-16 bg-[#1a1a1a] border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <h3 className="text-center text-[#F5F5DC]/50 mb-12 uppercase tracking-widest text-sm">شركاء النجاح</h3>
                <div className="flex justify-center flex-wrap gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                     {/* Placeholders for logos */}
                     {[1, 2, 3, 4, 5].map((i) => (
                         <div key={i} className="h-12 w-32 bg-white/10 rounded flex items-center justify-center text-xs text-white/30">
                             شعار {i}
                         </div>
                     ))}
                </div>
            </div>
        </section>
    )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
      <Partners />
    </>
  );
}
