"use client";

import { useState, useEffect } from "react";

const CONSENT_KEY = "keif-cookie-consent-v1";

/**
 * Reads cookie consent from localStorage.
 * Returns true only if the user explicitly accepted.
 * Analytics scripts should call this before loading.
 */
export function hasCookieConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    return parsed.accepted === true;
  } catch {
    return false;
  }
}

/**
 * Dispatches a custom event when consent state changes,
 * so analytics loaders can react without polling.
 */
function notifyConsentChange(accepted: boolean) {
  window.dispatchEvent(new CustomEvent("cookie-consent-change", { detail: { accepted } }));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if no consent recorded
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      // Small delay so it doesn't flash on initial load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ accepted: true, date: new Date().toISOString() }));
    notifyConsentChange(true);
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ accepted: false, date: new Date().toISOString() }));
    notifyConsentChange(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="إشعار الخصوصية وملفات تعريف الارتباط"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 z-[90] mx-auto max-w-2xl"
    >
      <div
        className="rounded-2xl p-5 shadow-2xl"
        style={{
          background: "linear-gradient(160deg, rgba(25,20,8,0.97), rgba(15,12,5,0.99))",
          border: "1px solid rgba(184,134,11,0.25)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-[#F5F5DC] text-sm leading-relaxed mb-1" style={{ fontWeight: 600 }}>
              ✦ إشعار الخصوصية
            </p>
            <p className="text-[#F5F5DC]/60 text-xs leading-relaxed">
              نستخدم ملفات تعريف الارتباط (الكوكيز) لتحسين تجربتك وتحليل أداء الموقع،
              وذلك بما يتوافق مع نظام حماية البيانات الشخصية السعودي (PDPL).
              يمكنك الموافقة أو الرفض.
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2.5 rounded-full text-[#F5F5DC]/70 text-xs min-h-[44px] transition-colors"
              style={{ border: "1px solid rgba(184,134,11,0.2)", fontWeight: 600 }}
            >
              رفض
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2.5 rounded-full text-[#0f0f0f] text-xs min-h-[44px] transition-transform hover:scale-[1.03]"
              style={{
                background: "linear-gradient(135deg, #B8860B, #D4A017)",
                fontWeight: 700,
                boxShadow: "0 4px 15px rgba(184,134,11,0.3)",
              }}
            >
              موافقة
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
