"use client";

import { memo, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { MotionConfig } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const FloatingWhatsApp = dynamic(() => import("@/components/FloatingWhatsApp"), {
  ssr: false,
});

// طبقات التأثيرات الفاخرة (grain + cursor spotlight) — عميل فقط، لا تؤثر على SSR/LCP
const LuxuryFX = dynamic(() => import("@/components/LuxuryFX"), {
  ssr: false,
});

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

function ClientLayoutInner({ children }: { children: React.ReactNode }) {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      const promptEvent = e as BeforeInstallPromptEvent;
      promptEvent.preventDefault();
      setDeferredPrompt(promptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#0f0f0f] text-[#F5F5DC]" dir="rtl">
        <Navbar deferredPrompt={deferredPrompt} setDeferredPrompt={setDeferredPrompt} />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
        <LuxuryFX />
      </div>
    </MotionConfig>
  );
}

export default memo(ClientLayoutInner);
