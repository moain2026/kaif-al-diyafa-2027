'use client';

/**
 * SpotlightCard — بطاقة فاخرة بهالة ذهبية تتبع مؤشر الماوس داخلها
 * (نمط Awwwards شائع للبطاقات). transform/opacity-only، آمن للأداء.
 */

import { ReactNode } from 'react';
import { motion, useMotionValue, useMotionTemplate } from 'motion/react';

interface Props {
  children: ReactNode;
  className?: string;
}

export function SpotlightCard({ children, className = '' }: Props) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const handleMove = (e: React.MouseEvent) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  const bg = useMotionTemplate`radial-gradient(420px circle at ${mx}px ${my}px, rgba(197,160,89,0.13), transparent 65%)`;

  return (
    <div onMouseMove={handleMove} className={`group relative overflow-hidden ${className}`}>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: bg }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
