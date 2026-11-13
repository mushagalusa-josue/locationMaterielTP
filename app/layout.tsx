import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://location-materiel-tp.vercel.app/";
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CampusShare | Location de matériel informatique à Goma",
  description: "CampusShare facilite la location et le partage de matériel informatique entre étudiants à Goma, en RDC. Découvrez le concept et les équipements proposés.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "CampusShare | Le matériel informatique, plus accessible à Goma",
    description: "Une plateforme pensée pour faciliter la location de matériel informatique entre étudiants à Goma.",
    type: "website", locale: "fr_CD", siteName: "CampusShare", url: "/"
  },
  ...(googleVerification ? { verification: { google: googleVerification } } : {})
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}{gaId ? <GoogleAnalytics gaId={gaId} /> : null}</body></html>;
}
