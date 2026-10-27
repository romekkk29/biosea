import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bioseasoluciones.com"),
  title: {
    default: "Biosea Soluciones | Productos Agrícolas y Fitosanitarios",
    template: "%s | Biosea Soluciones",
  },
  description:
    "Biosea Soluciones ofrece productos fitosanitarios, fertilizantes y bioestimulantes de alta eficiencia para cultivos de vid, ajo, cebolla y tomate. Asistencia técnica en todo el país.",
  keywords: [
    "productos agrícolas",
    "fitosanitarios",
    "fertilizantes",
    "bioestimulantes",
    "sanosil",
    "coda",
    "mob",
    "ignition",
    "vid",
    "ajo",
    "cebolla",
    "tomate",
    "agricultura sostenible",
    "argentina",
    "mendoza",
  ],
  authors: [{ name: "Biosea Soluciones" }],
  creator: "Biosea Soluciones",
  publisher: "Biosea Soluciones",
  formatDetection: { telephone: true, email: true },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://bioseasoluciones.com",
    siteName: "Biosea Soluciones",
    title: "Biosea Soluciones | Productos Agrícolas y Fitosanitarios",
    description:
      "Soluciones fitosanitarias, fertilizantes y bioestimulantes para la agricultura sostenible. Presencia en todo el país.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biosea Soluciones | Productos Agrícolas",
    description:
      "Soluciones fitosanitarias, fertilizantes y bioestimulantes para la agricultura sostenible.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bioseasoluciones.com",
  name: "Biosea Soluciones",
  description:
    "Empresa de productos fitosanitarios, fertilizantes y bioestimulantes para cultivos agrícolas en Argentina.",
  url: "https://bioseasoluciones.com",
  telephone: "+549261 5087051",
  address: {
    "@type": "PostalAddress",
    addressCountry: "AR",
    addressRegion: "Mendoza",
  },
  areaServed: {
    "@type": "Country",
    name: "Argentina",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Productos Agrícolas",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "SANOSIL" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "CODA" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "MOB" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "IGNITION" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
