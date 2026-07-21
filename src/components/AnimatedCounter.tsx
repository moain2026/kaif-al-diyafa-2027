'use client';

/**
 * AnimatedCounter — عدّاد أرقام يتحرك عند ظهوره في الشاشة
 * يستخدم useInView + requestAnimationFrame (خفيف، بدون مكتبات إضافية)
 * يحترم prefers-reduced-motion (يعرض الرقم النهائي فوراً)
 */

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface Props {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // ms
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 1800,
  className = '',
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // easeOutExpo
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}
