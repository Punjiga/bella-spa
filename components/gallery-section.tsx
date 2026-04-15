"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

const galleryImages = [
  { src: "/images/gallery-lashes.jpg", alt: "Extensiones de pestañas voluminosas", category: "Pestañas" },
  { src: "/images/gallery-brows.jpg", alt: "Diseño y laminado de cejas", category: "Cejas" },
  { src: "/images/gallery-nails.jpg", alt: "Uñas en gel con diseño", category: "Uñas" },
  { src: "/images/gallery-depilation.jpg", alt: "Tratamiento de depilación", category: "Depilación" },
  { src: "/images/gallery-lashes2.jpg", alt: "Pestañas largas y rizadas", category: "Pestañas" },
  { src: "/images/gallery-brows2.jpg", alt: "Cejas perfectas con laminado", category: "Cejas" },
]

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.08 }
    )
    const reveals = sectionRef.current?.querySelectorAll(".reveal")
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightboxSrc(null) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section id="galeria" ref={sectionRef} className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="reveal text-center mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-sans">Nuestro trabajo</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mt-3 text-balance">
            Galería
          </h2>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto font-sans leading-relaxed">
            Cada imagen es una historia de confianza, técnica y transformación.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightboxSrc(img.src)}
              className={cn(
                "reveal group relative overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary",
                i === 0 ? "row-span-2 col-span-1" : ""
              )}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={cn("relative w-full", i === 0 ? "h-[400px] md:h-[520px]" : "h-48 md:h-60")}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-xs tracking-widest uppercase font-sans">{img.category}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="reveal text-center mt-10">
          <p className="text-sm text-muted-foreground font-sans">
            ¿Quieres ver más resultados?{" "}
            <a
              href="https://wa.me/50672738067"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Escríbenos por WhatsApp
            </a>
          </p>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            onClick={() => setLightboxSrc(null)}
            className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
            aria-label="Cerrar"
          >
            <X size={32} />
          </button>
          <div className="relative max-w-3xl w-full max-h-[85vh] aspect-square" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxSrc}
              alt="Vista ampliada"
              fill
              className="object-contain rounded-xl"
              quality={95}
            />
          </div>
        </div>
      )}
    </section>
  )
}
