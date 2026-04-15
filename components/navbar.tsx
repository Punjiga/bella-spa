"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Galería", href: "#galeria" },
  { label: "Reseñas", href: "#resenas" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="#" 
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }} 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Ir al inicio"
        >
          <Logo size="md" />
          <div className="flex flex-col leading-none hidden sm:flex">
            <span className="font-serif text-lg font-semibold text-primary tracking-wide">
              Bella&apos;Spa
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground font-sans">
              Estudio de Belleza
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-sm tracking-wide transition-colors duration-200 hover:text-primary font-sans cursor-pointer",
                  scrolled ? "text-foreground" : "text-foreground"
                )}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="https://wa.me/50672738067"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-rose-dark hover:scale-105 shadow-sm cursor-pointer"
        >
          Agendar Cita
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-400 ease-in-out",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white/98 backdrop-blur-md border-b border-border px-6 pb-6 pt-2 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left text-base text-foreground hover:text-primary transition-colors py-1 font-sans cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/50672738067"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center bg-primary text-primary-foreground text-sm font-medium px-5 py-3 rounded-full hover:bg-rose-dark transition-colors"
          >
            Agendar Cita en WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
