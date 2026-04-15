"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const highlights = [
  "Técnicas certificadas internacionalmente",
  "Productos de alta calidad y seguros",
  "Atención personalizada y amorosa",
  "Ambiente limpio y premium",
  "Resultados naturales y duraderos",
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.1 }
    )
    const reveals = sectionRef.current?.querySelectorAll(".reveal")
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" ref={sectionRef} className="py-24 px-6 bg-blush">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="reveal relative">
            <div className="relative rounded-3xl overflow-hidden h-[480px] shadow-xl">
              <Image
                src="/images/about-studio.jpg"
                alt="Bella'Spa estudio de belleza"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-2xl shadow-lg px-6 py-4 flex flex-col items-center border border-border">
              <span className="font-serif text-3xl font-semibold text-primary">5 ★</span>
              <span className="text-xs text-muted-foreground tracking-wide font-sans mt-0.5">Calificación</span>
            </div>
          </div>

          {/* Text side */}
          <div className="flex flex-col gap-6">
            <div className="reveal">
              <span className="text-xs tracking-[0.3em] uppercase text-primary font-sans">Nuestra historia</span>
              <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mt-3 text-balance leading-tight">
                Pasión por la belleza, dedicación al detalle
              </h2>
            </div>

            <p className="reveal reveal-delay-1 text-muted-foreground font-sans leading-relaxed">
              En <strong className="text-foreground font-medium">Bella&apos;Spa</strong> creemos que cada persona merece sentirse extraordinaria. Nacimos con la misión de brindar servicios de belleza de alta calidad en Cartago, en un ambiente cálido, profesional y lleno de amor.
            </p>

            <p className="reveal reveal-delay-2 text-muted-foreground font-sans leading-relaxed">
              Nuestro equipo está certificado y en constante actualización con las últimas tendencias y técnicas del mundo de la belleza. Usamos solo productos premium para garantizar resultados impecables y seguros en cada cita.
            </p>

            <ul className="reveal reveal-delay-3 flex flex-col gap-3 mt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 font-sans text-sm text-foreground">
                  <CheckCircle size={18} className="text-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="reveal reveal-delay-4 mt-4">
              <a
                href="https://wa.me/50672738067"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-4 rounded-full text-sm transition-all duration-300 hover:scale-105 hover:bg-rose-dark shadow-md"
              >
                Conoce nuestros servicios
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
