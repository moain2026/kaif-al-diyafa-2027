'use client';

/**
 * MagneticButton — زر/عنصر مغناطيسي ينجذب نحو مؤشر الماوس
 * تأثير فاخر شائع في مواقع Awwwards. يعمل كـ wrapper حول أي محتوى.
 * - transform-only (لا يكسر layout)
 * - يُعطّل على اللمس و reduced-motion
 */

import { useRef, ReactNode } from 'react';
import { motion } from 'motion/react';

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number; // كم ينجذب (px)
  as?: 'div' | 'span';
}

export function MagneticButton({
  children,
  className = '',
  strength = 18,
  as = 'div',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate3d(${(x / rect.width) * strength}px, ${
      (y / rect.height) * strength
    }px, 0)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = 'translate3d(0,0,0)';
  };

  const Comp = as === 'span' ? motion.span : motion.div;

  return (
    <Comp
      ref={ref as React.RefObject<HTMLDivElement & HTMLSpanElement>}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      style={{ willChange: 'transform', transition: 'transform 0.25s cubic-bezier(0.22,1,0.36,1)' }}
    >
      {children}
    </Comp>
  );
}
