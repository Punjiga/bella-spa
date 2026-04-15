"use client"

import Link from "next/link"
import { Logo } from "./logo"

const quickLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
]

const services = [
  "Extensiones de Pestañas",
  "Diseño de Cejas",
  "Uñas en Gel",
  "Depilación",
  "Laminado de Cejas",
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground text-primary-foreground pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={scrollToTop}
              className="mb-4 flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Ir al inicio"
            >
              <Logo size="md" />
              <div>
                <span className="font-serif text-lg font-semibold text-primary tracking-wide">
                  Bella&apos;Spa
                </span>
                <p className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-sans">
                  Estudio de Belleza
                </p>
              </div>
            </button>
            <p className="text-white/60 text-sm font-sans leading-relaxed mb-6">
              Tu lugar de confianza en Cartago para lucir y sentirte increíble. Pestañas, cejas, uñas y más.
            </p>
            <a
              href="https://wa.me/50672738067"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-primary/80 hover:scale-105 cursor-pointer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar Cita
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white/90 font-sans text-xs tracking-[0.2em] uppercase mb-5">Navegación</h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-primary text-sm font-sans transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/90 font-sans text-xs tracking-[0.2em] uppercase mb-5">Servicios</h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNavClick("#servicios")}
                    className="text-white/60 hover:text-primary text-sm font-sans transition-colors duration-200 cursor-pointer"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/90 font-sans text-xs tracking-[0.2em] uppercase mb-5">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+50672738067"
                className="text-white/60 hover:text-primary text-sm font-sans transition-colors duration-200 cursor-pointer"
              >
                7273-8067
              </a>
              <a
                href="https://wa.me/50672738067"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-primary text-sm font-sans transition-colors duration-200 cursor-pointer"
              >
                WhatsApp
              </a>
              <p className="text-white/60 text-sm font-sans">
                Cartago, Costa Rica
              </p>
              <div className="mt-2">
                <p className="text-white/40 text-xs font-sans">Lun–Vie: 8 AM – 8 PM</p>
                <p className="text-white/40 text-xs font-sans">Sáb–Dom: 10 AM – 5 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-sans">
            &copy; {currentYear} Bella&apos;Spa. Todos los derechos reservados.
          </p>
          <a
            href="https://srstudio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-primary text-xs font-sans transition-all duration-300 hover:glow group cursor-pointer"
          >
            Creado por{" "}
            <span className="text-white/60 group-hover:text-primary transition-colors">SR Studio</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
