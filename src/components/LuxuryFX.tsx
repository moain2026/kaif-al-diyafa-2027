'use client';

/**
 * LuxuryFX — طبقات التأثيرات البصرية الفاخرة (Awwwards-level)
 * ═══════════════════════════════════════════════════════════
 * 1. GrainOverlay   — نسيج حبيبي سينمائي خفيف يغطي الموقع كامل
 * 2. CursorSpotlight — هالة ذهبية تتبع مؤشر الماوس (ديسكتوب فقط)
 *
 * كل التأثيرات:
 *  - pointer-events: none (لا تعيق التفاعل)
 *  - تحترم prefers-reduced-motion
 *  - transform/opacity فقط (لا تكسر CLS/LCP)
 *  - تُعطّل تلقائياً على الأجهزة اللمسية / الجوال
 */

import { useEffect, useRef, useState } from 'react';

/* ── 1) Grain / Noise Overlay ─────────────────────────────── */
export function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] opacity-[0.035] mix-blend-overlay"
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: '140px 140px',
      }}
    />
  );
}

/* ── 2) Cursor Spotlight (هالة ذهبية تتبع الماوس) ─────────── */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // تعطيل على الأجهزة اللمسية أو reduced-motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reduce) return;
    setEnabled(true);

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    const tick = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${cx - 300}px, ${cy - 300}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[55] hidden lg:block"
      style={{
        width: 600,
        height: 600,
        borderRadius: '50%',
        background:
          'radial-gradient(circle, rgba(197,160,89,0.08) 0%, rgba(197,160,89,0.03) 35%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}

/* ── Wrapper يجمع كل التأثيرات ─────────────────────────────── */
export default function LuxuryFX() {
  return (
    <>
      <GrainOverlay />
      <CursorSpotlight />
    </>
  );
}
