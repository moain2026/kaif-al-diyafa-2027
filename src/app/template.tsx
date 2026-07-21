// template.tsx — kept as pass-through for potential page transitions.
// ClientLayout (Navbar/Footer/WhatsApp/CookieConsent) moved to layout.tsx
// to prevent re-mounting chrome on every navigation (Code Reviewer #4).
export default function Template({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
