import Image from "next/image";
import Navbar from "@/components/Navbar";

const PHONE = "+549261 5087051";
const PHONE_DISPLAY = "+54 9 261 508-7051";
const WHATSAPP_LINK = `https://wa.me/5492615087051`;

const products = [
  {
    id: "sanosil",
    name: "SANOSIL",
    tagline: "Desinfectante de amplio espectro",
    description:
      "Desinfectante universal que no genera residuos. Oxigena el agua, sin cloro, sin límite máximo de residuos y sin alterar el sabor de los alimentos.",
    highlights: [
      "Sin cloro ni residuos tóxicos",
      "Efecto depósito: permanece activo",
      "Biodegradable y sustentable",
      "Presentaciones: 6 kg, 12 kg, 30 kg, IBC 1100 kg",
    ],
    datasheet:
      "https://bioseasoluciones.com/wp-content/uploads/2021/02/Sdb_EU-REACH_Sanosil-S-Agro_V1_es_ES.pdf",
    color: "from-emerald-600 to-green-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.78 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "coda",
    name: "CODA",
    tagline: "Fertilizantes y bioestimulantes de alta eficiencia",
    description:
      "Fertilizantes y bioestimulantes especiales de origen sostenible diseñados para la agricultura tecnificada. Mejoran el suelo, potencian el sistema radicular y maximizan rendimientos.",
    highlights: [
      "Correctores de calcio y micronutrientes",
      "Acidificantes y precoladores",
      "Activadores fisiológicos",
      "Aplicación radicular y foliar",
    ],
    datasheet: null,
    color: "from-green-600 to-teal-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "mob",
    name: "MOB",
    tagline: "Protección fitosanitaria sostenible",
    description:
      "Nuestros MOBs cuidan los cultivos de ataques de patógenos y aumentan su eficiencia productiva. Planes integrales fitosanitarios sin residuos para una agricultura sostenible.",
    highlights: [
      "Protección contra patógenos",
      "Sin síntesis química",
      "Alta eficiencia productiva",
      "Planes integrales fitosanitarios",
    ],
    datasheet:
      "https://bioseasoluciones.com/wp-content/uploads/2021/02/seguridad_MOB.pdf",
    color: "from-teal-600 to-cyan-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: "ignition",
    name: "IGNITION",
    tagline: "Micronutrientes para el máximo rendimiento",
    description:
      "Formulación de micronutrientes de última generación para potenciar el desarrollo y la calidad de los cultivos en todos sus estados fenológicos.",
    highlights: [
      "Micronutrientes quelados",
      "Alta disponibilidad radicular y foliar",
      "Estable en amplio rango de pH",
      "Incrementa la actividad fotosintética",
    ],
    datasheet:
      "https://bioseasoluciones.com/wp-content/uploads/2024/09/ignition.pdf",
    color: "from-lime-600 to-green-700",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const crops = [
  {
    name: "Vitivinicultura",
    icon: "🍇",
    pdf: "/docs/VITIVINICULTURA.pdf",
  },
  {
    name: "Ajo",
    icon: "🧄",
    pdf: "/docs/AJO.pdf",
  },
  {
    name: "Cebolla",
    icon: "🧅",
    pdf: "/docs/CEBOLLA.pdf",
  },
  {
    name: "Tomate",
    icon: "🍅",
    pdf: "/docs/TOMATE.pdf",
  },
  {
    name: "Bodega",
    icon: "🍷",
    pdf: "/docs/BODEGA.pdf",
  },
];

const features = [
  {
    title: "Asistencia Técnica",
    description:
      "Con pasión abrimos tranqueras: observamos, escuchamos y diagnosticamos para encontrar la solución exacta para tu cultivo.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Presencia Nacional",
    description:
      "Nuestros asociados están disponibles para trabajar en soluciones para tu cultivo en todo el territorio argentino.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "I+D Dinámico",
    description:
      "Nuestro equipo, junto a instituciones públicas y privadas, da soporte científico a cada una de nuestras recomendaciones.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Soluciones Adaptadas",
    description:
      "Nuestras propuestas responden a las necesidades de la agricultura sostenible, con aplicación técnica y económica inmediata.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-green-950">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* Overlay para legibilidad del texto */}
        <div className="absolute inset-0 bg-green-950/65" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block bg-green-800/60 text-green-200 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-green-700/50">
              🌱 Agricultura Sostenible · Argentina
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
              Soluciones para{" "}
              <span className="text-green-300">tus cultivos</span>
            </h1>
            <p className="text-green-100 text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              Productos fitosanitarios, fertilizantes y bioestimulantes de alta
              eficiencia. Asistencia técnica personalizada con presencia en todo
              el país.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-green-950 font-bold px-6 py-3.5 rounded-xl transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultanos por WhatsApp
              </a>
              <a
                href="#productos"
                className="inline-flex items-center justify-center gap-2 border-2 border-green-400/50 text-green-100 hover:bg-green-800/50 px-6 py-3.5 rounded-xl transition-colors text-base font-medium"
              >
                Ver productos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-white"
              >
                <div className="w-10 h-10 bg-green-500/30 rounded-lg flex items-center justify-center mb-3 text-green-200">
                  {f.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-green-200 text-xs leading-relaxed line-clamp-3">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        <a href="#productos" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-green-300 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* FEATURES (mobile: full section) */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
              ¿Por qué Biosea Soluciones?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Más de una década acompañando a productores de todo el país con
              tecnología de punta y soporte científico.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl border border-green-100 hover:border-green-300 hover:shadow-lg hover:shadow-green-50 transition-all"
              >
                <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-xl flex items-center justify-center mb-4 text-green-700 transition-colors">
                  {f.icon}
                </div>
                <h3 className="font-bold text-green-900 mb-2">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="productos" className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              Nuestros productos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mt-2 mb-4">
              Línea de productos agrícolas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Formulaciones de origen sostenible para la protección y nutrición
              de tus cultivos, con soporte técnico incluido.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {products.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-2xl border border-green-100 overflow-hidden hover:shadow-xl hover:shadow-green-100/50 transition-all group"
              >
                <div className={`bg-gradient-to-r ${p.color} p-6 flex items-center gap-4`}>
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                    <p className="text-white/80 text-sm">{p.tagline}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {p.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-3">
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
                    >
                      Consultar precio
                    </a>
                    {p.datasheet && (
                      <a
                        href={p.datasheet}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 border border-green-200 hover:bg-green-50 text-green-700 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        Ficha técnica
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CROPS */}
      <section id="cultivos" className="py-20 bg-green-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider">
              IFUS — Instrucciones de Uso
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Soluciones por cultivo
            </h2>
            <p className="text-green-200 max-w-xl mx-auto">
              Descargá las instrucciones de uso adaptadas a cada cultivo y consultá
              con nuestro equipo técnico.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {crops.map((c) => (
              <a
                key={c.name}
                href={c.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-green-800/60 hover:bg-green-700/80 border border-green-700/50 hover:border-green-500 rounded-2xl p-6 flex flex-col items-center gap-3 text-center transition-all"
              >
                <span className="text-4xl">{c.icon}</span>
                <span className="text-white font-semibold text-sm group-hover:text-green-200 transition-colors">
                  {c.name}
                </span>
                <span className="text-green-400 text-xs flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar PDF
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-3xl p-10 sm:p-14">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-green-900 mb-4">
              Hablemos sobre tu cultivo
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Nuestro equipo técnico está listo para asesorarte y encontrar la
              solución ideal para tu producción.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-xl transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-green-300 hover:border-green-500 text-green-800 font-bold px-8 py-4 rounded-xl transition-colors text-base"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-950 text-green-200 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-8 pb-8 border-b border-green-800">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Image
                  src="/logo-icon.svg"
                  alt="Biosea Soluciones"
                  width={44}
                  height={21}
                  className="brightness-0 invert opacity-80"
                />
                <span className="font-bold text-white">Biosea Soluciones</span>
              </div>
              <p className="text-sm text-green-400 leading-relaxed">
                Soluciones fitosanitarias y nutricionales para la agricultura sostenible argentina.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Productos</h4>
              <ul className="space-y-1.5 text-sm text-green-400">
                {products.map((p) => (
                  <li key={p.id}>
                    <a href="#productos" className="hover:text-green-200 transition-colors">
                      {p.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3 text-sm uppercase tracking-wider">Contacto</h4>
              <div className="space-y-2 text-sm text-green-400">
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-2 hover:text-green-200 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-green-200 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
                <p className="text-green-500 text-xs mt-2">Cobertura nacional · Argentina</p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-green-600">
            <p>© {new Date().getFullYear()} Biosea Soluciones. Todos los derechos reservados.</p>
            <p>Representantes oficiales de Sanosil en Argentina</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
