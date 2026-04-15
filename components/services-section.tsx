"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

const services = [
  {
    id: "pestanas",
    title: "Pestañas",
    description: "Extensiones volumen ruso, clásicas e híbridas. Adaptadas a tu tipo de ojo para un look natural o dramático.",
    tag: "Más solicitado",
    image: "/images/gallery-lashes.jpg",
    items: ["Volumen ruso", "Clásico", "Híbrido", "Lifting"],
  },
  {
    id: "cejas",
    title: "Cejas",
    description: "Diseño, laminado, tinte y microblading. Cejas perfectamente definidas que enmarcan tu mirada.",
    tag: null,
    image: "/images/gallery-brows.jpg",
    items: ["Laminado", "Tinte", "Diseño", "Microblading"],
  },
  {
    id: "unas",
    title: "Uñas",
    description: "Manicura y pedicura con gel, acrílico y nail art. Diseños únicos para expresar tu estilo.",
    tag: null,
    image: "/images/gallery-nails.jpg",
    items: ["Gel", "Acrílico", "Nail art", "Semipermanente"],
  },
  {
    id: "depilacion",
    title: "Depilación",
    description: "Depilación con cera y técnicas especializadas. Resultados duraderos y confortables.",
    tag: null,
    image: "/images/gallery-depilation.jpg",
    items: ["Cera", "Cara", "Cuerpo completo", "Zona bikini"],
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 }
    )

    const heading = sectionRef.current?.querySelector(".reveal-heading")
    if (heading) observer.observe(heading)
    cardRefs.current.forEach((card) => { if (card) observer.observe(card) })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="servicios" ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="reveal reveal-heading text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-sans">Lo que ofrecemos</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mt-3 text-balance">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto font-sans leading-relaxed">
            Cada servicio es una experiencia diseñada para hacerte sentir y lucir tu mejor versión.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={service.id}
              ref={(el) => { cardRefs.current[i] = el }}
              className={`reveal reveal-delay-${i + 1} group relative bg-card rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-xl transition-all duration-300 cursor-pointer`}
              role="article"
              tabIndex={0}
              aria-label={`${service.title}: ${service.description}`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {service.tag && (
                  <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-[10px] tracking-wider uppercase px-3 py-1 rounded-full font-sans">
                    {service.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-sans mb-4">{service.description}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="text-[11px] bg-blush text-foreground/70 px-2.5 py-1 rounded-full font-sans"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA on hover */}
              <div className="px-6 pb-6">
                <a
                  href="https://wa.me/50672738067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-medium text-primary border border-primary/30 rounded-full py-2.5 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  Agendar ahora
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
