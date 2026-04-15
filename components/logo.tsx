import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  onClick?: () => void
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizeClasses = {
  sm: "w-10 h-10",
  md: "w-12 h-12",
  lg: "w-16 h-16",
}

export function Logo({ onClick, className = "", size = "md" }: LogoProps) {
  const sizeClass = sizeClasses[size]

  return (
    <div
      className={`${sizeClass} rounded-full overflow-hidden shadow-md flex items-center justify-center bg-primary/10 flex-shrink-0 ${className}`}
      onClick={onClick}
    >
      <Image
        src="/images/logo.jpeg"
        alt="Bella'Spa Logo"
        width={64}
        height={64}
        className="w-full h-full object-cover"
        priority
      />
    </div>
  )
}
