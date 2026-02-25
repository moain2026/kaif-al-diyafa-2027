import React from 'react';
import { useParams, Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle, MessageCircle } from 'lucide-react';

export default function ServiceDetails() {
  const { id } = useParams();
  
  // Mock data - in a real app this would come from an API based on ID
  const service = {
    title: "الضيافة الرجالية الفاخرة",
    description: "نقدم تجربة ضيافة متكاملة تليق بمقام ضيوفكم، حيث يجمع فريقنا بين الخبرة العريقة واللمسات العصرية. نهتم بأدق التفاصيل من لحظة وصول الضيوف وحتى مغادرتهم.",
    features: [
      "مباشرين بزي سعودي موحد وأنيق",
      "أجود أنواع القهوة السعودية (شقرائ، خولاني، ...)",
      "تمور فاخرة محشوة وسادة",
      "شاي أحمر، أخضر، ونعناع",
      "بخور وعود فاخر لاستقبال الضيوف"
    ],
    image: "https://images.unsplash.com/photo-1688487197602-9c40fa317e74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWl0ZXIlMjBzZXJ2aW5nJTIwY29mZmVlfGVufDF8fHx8MTc3MjA1NjA2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  };

  return (
    <div className="pb-24 min-h-screen">
      {/* Header Image */}
      <div className="relative h-[50vh] w-full">
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#212121] to-transparent" />
        <Link to="/services" className="absolute top-6 right-6 bg-black/50 p-2 rounded-full text-white hover:bg-[#B8860B] transition-colors z-20">
            <ArrowLeft size={24} />
        </Link>
        <div className="absolute bottom-0 right-0 p-6 md:p-12 w-full">
             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-[#F5F5DC] mb-4"
             >
                {service.title}
             </motion.h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert prose-lg max-w-none"
        >
            <p className="text-[#F5F5DC]/80 text-xl leading-relaxed mb-12">
                {service.description}
            </p>

            <h3 className="text-2xl font-bold text-[#B8860B] mb-6">مميزات الخدمة</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 bg-[#1a1a1a] p-4 rounded-lg border border-white/5">
                        <CheckCircle className="text-[#B8860B] flex-shrink-0" size={20} />
                        <span className="text-[#F5F5DC]">{feature}</span>
                    </div>
                ))}
            </div>
            
             <h3 className="text-2xl font-bold text-[#B8860B] mb-6">الأزياء</h3>
             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                 {[1, 2, 3].map((i) => (
                     <div key={i} className="aspect-[3/4] bg-[#1a1a1a] rounded-lg border border-white/5 flex items-center justify-center text-white/20">
                         زي {i}
                     </div>
                 ))}
             </div>
        </motion.div>
      </div>

      {/* Sticky Bottom Inquiry Button */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 p-4 bg-[#212121]/90 backdrop-blur-md border-t border-white/10 z-40 md:hidden"
      >
        <button className="w-full bg-[#B8860B] text-white py-3 rounded-lg font-bold shadow-lg shadow-[#B8860B]/20 flex items-center justify-center gap-2">
            <MessageCircle size={20} />
            <span>استفسار سريع</span>
        </button>
      </motion.div>
    </div>
  );
}
