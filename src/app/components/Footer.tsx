import React from 'react';
import { Link } from 'react-router';
import { Instagram, Phone, MapPin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-white/5 pt-16 pb-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#B8860B]">كيف الضيافة</h2>
          <p className="text-[#F5F5DC]/70 leading-relaxed text-sm">
            نقدم تجربة ضيافة سعودية فاخرة تجمع بين الأصالة والحداثة، لنصنع لكم ولضيوفكم ذكريات لا تُنسى.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#F5F5DC]">روابط سريعة</h3>
          <ul className="space-y-4 text-sm text-[#F5F5DC]/70">
            <li><Link to="/services" className="hover:text-[#B8860B] transition-colors">خدماتنا</Link></li>
            <li><Link to="/offerings" className="hover:text-[#B8860B] transition-colors">التقديمات</Link></li>
            <li><Link to="/portfolio" className="hover:text-[#B8860B] transition-colors">معرض الأعمال</Link></li>
            <li><Link to="/contact" className="hover:text-[#B8860B] transition-colors">تواصل معنا</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#F5F5DC]">تواصل معنا</h3>
          <ul className="space-y-4 text-sm text-[#F5F5DC]/70">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#B8860B]" />
              <span dir="ltr">+966 50 000 0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#B8860B]" />
              <span>info@keifaldiafa.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-[#B8860B]" />
              <span>الرياض، المملكة العربية السعودية</span>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-6 text-[#F5F5DC]">تابعنا</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#B8860B] hover:text-white transition-colors text-[#F5F5DC]">
              <Instagram size={20} />
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-xs text-[#F5F5DC]/40">
        <p>&copy; {new Date().getFullYear()} كيف الضيافة. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
