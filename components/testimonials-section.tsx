"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "María G.",
    service: "Extensiones de pestañas",
    review: "Increíble resultado. Mis pestañas quedaron perfectas, duraderas y súper naturales. La atención fue excepcional, me sentí muy cómoda durante todo el proceso. ¡Sin duda regreso!",
    stars: 5,
    initial: "M",
  },
  {
    name: "Sofía R.",
    service: "Laminado de cejas",
    review: "¡Las mejores cejas de mi vida! El diseño quedó exactamente como lo quería. El ambiente es muy lindo y limpio. Totalmente recomendado para cualquier chica que quiera verse radiante.",
    stars: 5,
    initial: "S",
  },
  {
    name: "Valeria C.",
    service: "Uñas en gel",
    review: "Me encantó el servicio desde el primer momento. Las uñas quedaron hermosas y duraron semanas sin despegarse. El trato es muy profesional y amable. Ya agendé mi próxima cita.",
    stars: 5,
    initial: "V",
  },
  {
    name: "Andrea L.",
    service: "Depilación",
    review: "El mejor lugar en Cartago para depilación. Técnica impecable, muy cuidadosa y delicada. Se nota el profesionalismo. El estudio es precioso y muy cómodo. 100% recomendado.",
    stars: 5,
    initial: "A",
  },
  {
    name: "Daniela P.",
    service: "Pestañas volumen ruso",
    review: "Quedé absolutamente enamorada de mis pestañas. El volumen ruso es espectacular y natural al mismo tiempo. La estilista es muy detallista y paciente. Bella'Spa es ahora mi lugar favorito.",
    stars: 5,
    initial: "D",
  },
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

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

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => goNext(), 5000)
    return () => clearInterval(timer)
  }, [active])

  const goTo = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setActive(index)
      setIsAnimating(false)
    }, 150)
  }

  const goPrev = () => goTo((active - 1 + testimonials.length) % testimonials.length)
  const goNext = () => goTo((active + 1) % testimonials.length)

  return (
    <section id="resenas" ref={sectionRef} className="py-24 px-6 bg-blush overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-sans">Lo que dicen</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mt-3 text-balance">
            Nuestras Clientas
          </h2>
        </div>

        {/* Carousel */}
        <div className="reveal relative">
          {/* Main card */}
          <div
            className={cn(
              "bg-white rounded-3xl shadow-lg border border-border p-8 md:p-12 text-center transition-all duration-300",
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            )}
          >
            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-6">
              {Array.from({ length: testimonials[active].stars }).map((_, i) => (
                <Star key={i} size={18} className="fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-xl md:text-2xl text-foreground leading-relaxed italic mb-8 text-balance max-w-2xl mx-auto">
              &ldquo;{testimonials[active].review}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-serif text-xl font-semibold text-primary">{testimonials[active].initial}</span>
              </div>
              <div>
                <p className="font-medium text-foreground font-sans">{testimonials[active].name}</p>
                <p className="text-xs text-muted-foreground tracking-wide font-sans">{testimonials[active].service}</p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={goPrev}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={cn(
                    "rounded-full transition-all duration-300 cursor-pointer",
                    i === active ? "w-6 h-2.5 bg-primary" : "w-2.5 h-2.5 bg-primary/30 hover:bg-primary/60"
                  )}
                  aria-label={`Reseña ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:border-primary hover:text-primary transition-colors cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
