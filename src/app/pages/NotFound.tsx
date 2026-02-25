import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-4 bg-[#212121]">
      <h1 className="text-6xl font-bold text-[#B8860B] mb-4">404</h1>
      <p className="text-xl text-[#F5F5DC] mb-8">عذراً، الصفحة التي تبحث عنها غير موجودة.</p>
      <Link to="/" className="px-6 py-3 bg-[#B8860B] text-white rounded-lg hover:bg-[#a0740a] transition-colors">
        العودة للرئيسية
      </Link>
    </div>
  );
}
