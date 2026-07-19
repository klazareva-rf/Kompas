import Image from "next/image"
import { Check, Clock, GraduationCap, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroBullets = [
  "Планирование маршрутов с ИИ",
  "Чат-боты и CRM для записи туристов",
  "Аудиогиды на нескольких языках",
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-secondary/60">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_0%,color-mix(in_oklch,var(--color-primary)_16%,transparent),transparent)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
            Новый онлайн-курс для гидов
          </span>

          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Цифровой компас: искусство впечатлений
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Освойте ИИ, цифровые инструменты и автоматизацию, чтобы избавиться от
            рутины и создавать безопасный, современный и запоминающийся
            туристический опыт.
          </p>

          <ul className="mt-6 grid gap-2.5">
            {heroBullets.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <a href="#lead">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Написать «КОМПАС»
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#curriculum">Смотреть программу</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
              Онлайн, в удобном темпе
            </span>
            <span className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-primary" aria-hidden="true" />
              Документ установленного образца
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
            <Image
              src="/hero-guide.png"
              alt="Гид ведёт группу туристов и использует цифровую навигацию на смартфоне"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-border bg-card p-4 shadow-lg sm:block">
            <p className="font-display text-2xl font-extrabold text-primary">7+</p>
            <p className="text-xs text-muted-foreground">цифровых навыков в программе</p>
          </div>
        </div>
      </div>
    </section>
  )
}
