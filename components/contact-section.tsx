"use client"

import { useEffect, useRef } from "react"
import { MapPin, Clock, Phone } from "lucide-react"

const schedule = [
  { days: "Lunes – Viernes", hours: "8:00 AM – 8:00 PM" },
  { days: "Sábado – Domingo", hours: "10:00 AM – 5:00 PM" },
]

export function ContactSection() {
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
    <section id="contacto" ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-sans">Visítanos</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mt-3 text-balance">
            Ubicación y Contacto
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto font-sans leading-relaxed">
            Estamos en Cartago para consentirte. Agenda tu cita y transforma tu look.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Info Card */}
          <div className="reveal flex flex-col gap-6">
            {/* Location */}
            <div className="bg-card border border-border rounded-3xl p-8 flex gap-5 items-start shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blush flex items-center justify-center flex-shrink-0">
                <MapPin size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">Ubicación</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">
                  Cartago, Costa Rica
                </p>
                <a
                  href="https://wa.me/50672738067?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20la%20direcci%C3%B3n%20exacta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline mt-1 inline-block font-sans"
                >
                  Consultar dirección exacta →
                </a>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-card border border-border rounded-3xl p-8 flex gap-5 items-start shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blush flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-medium text-foreground mb-3">Horario</h3>
                <div className="flex flex-col gap-2">
                  {schedule.map((s) => (
                    <div key={s.days} className="flex items-center justify-between gap-4">
                      <span className="text-sm text-foreground font-sans">{s.days}</span>
                      <span className="text-sm text-primary font-medium font-sans whitespace-nowrap">{s.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-card border border-border rounded-3xl p-8 flex gap-5 items-start shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blush flex items-center justify-center flex-shrink-0">
                <Phone size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-medium text-foreground mb-1">Teléfono</h3>
                <a
                  href="tel:+50672738067"
                  className="text-foreground font-sans text-base hover:text-primary transition-colors"
                >
                  7273-8067
                </a>
              </div>
            </div>
          </div>

          {/* CTA Card + Map */}
          <div className="reveal reveal-delay-2 flex flex-col gap-6">
            {/* Big CTA */}
            <div className="bg-primary rounded-3xl p-10 flex flex-col items-center text-center gap-6 text-primary-foreground shadow-lg flex-1">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>

              <div>
                <h3 className="font-serif text-3xl font-medium mb-2">¿Lista para brillar?</h3>
                <p className="text-white/80 font-sans text-sm leading-relaxed max-w-xs">
                  Agenda tu cita fácilmente por WhatsApp. Respuesta rápida, atención personalizada.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <a
                  href="https://wa.me/50672738067"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white text-primary font-medium px-6 py-3.5 rounded-full text-sm text-center hover:bg-white/90 transition-colors shadow-sm"
                >
                  Agendar por WhatsApp
                </a>
                <a
                  href="tel:+50672738067"
                  className="flex-1 border border-white/40 text-white font-medium px-6 py-3.5 rounded-full text-sm text-center hover:bg-white/10 transition-colors"
                >
                  Llamar: 7273-8067
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-3xl overflow-hidden border border-border shadow-sm h-52">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62847.11867767296!2d-83.94397!3d9.864672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e36b6e2b8b89%3A0xf72a0d8d5b88e498!2sCartago%2C%20Costa%20Rica!5e0!3m2!1ses!2scr!4v1697000000000!5m2!1ses!2scr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Bella'Spa - Cartago, Costa Rica"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
