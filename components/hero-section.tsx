"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.35}px)`
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToServices = () => {
    const el = document.querySelector("#servicios")
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110 will-change-transform">
        <Image
          src="/images/hero-bg.jpg"
          alt="Bella'Spa – Estudio de belleza en Cartago"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-white/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col items-start">
        <span className="text-xs tracking-[0.3em] uppercase text-primary font-sans mb-6 opacity-0 animate-[fadeInUp_0.8s_ease_0.2s_forwards]">
          Cartago, Costa Rica
        </span>

        <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-medium text-foreground leading-tight text-balance max-w-3xl opacity-0 animate-[fadeInUp_0.8s_ease_0.4s_forwards]">
          Tu belleza,{" "}
          <span className="text-primary italic">nuestra</span>
          <br />
          pasión
        </h1>

        <p className="mt-6 text-base sm:text-lg text-muted-foreground font-sans leading-relaxed max-w-md opacity-0 animate-[fadeInUp_0.8s_ease_0.6s_forwards]">
          Especialistas en pestañas, cejas, uñas y depilación. Resultados que hablan por sí solos — porque mereces sentirte extraordinaria.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 opacity-0 animate-[fadeInUp_0.8s_ease_0.8s_forwards]">
          <a
            href="https://wa.me/50672738067"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-4 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:bg-rose-dark shadow-md cursor-pointer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agendar cita
          </a>

          <button
            onClick={scrollToServices}
            className="inline-flex items-center gap-2 border border-foreground/20 text-foreground font-medium px-8 py-4 rounded-full text-sm transition-all duration-300 hover:border-primary hover:text-primary bg-white/60 backdrop-blur-sm cursor-pointer"
          >
            Ver servicios
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap gap-8 opacity-0 animate-[fadeInUp_0.8s_ease_1s_forwards]">
          {[
            { value: "100%", label: "Productos certificados" },
            { value: "+500", label: "Clientas satisfechas" },
            { value: "5★", label: "Calificación promedio" },
          ].map((badge) => (
            <div key={badge.label} className="flex flex-col">
              <span className="font-serif text-2xl font-semibold text-primary">{badge.value}</span>
              <span className="text-xs text-muted-foreground tracking-wide font-sans">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll hacia abajo"
      >
        <ChevronDown size={28} />
      </button>

      {/* Keyframe styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
