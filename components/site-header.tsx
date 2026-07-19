"use client"

import { Compass, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Результат", href: "#result" },
  { label: "Программа", href: "#program" },
  { label: "Доказательства", href: "#proof" },
  { label: "Оффер", href: "#offer" },
  { label: "Вопросы", href: "#faq" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Compass className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-extrabold tracking-tight text-foreground">
              Академия «Каспий»
            </span>
            <span className="text-xs text-muted-foreground">Цифровой компас</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Основная навигация">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+78722701177"
            className="hidden items-center gap-2 text-sm font-semibold text-foreground md:flex"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            +7 (8722) 70-11-77
          </a>
          <Button asChild size="sm">
            <a href="#lead">Записаться</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
