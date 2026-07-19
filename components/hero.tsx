import Image from "next/image"
import { CalendarClock, Check, FileBadge } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroBullets = [
  "Собираете маршруты и тексты экскурсий с ИИ за минуты",
  "Запускаете чат-бота, аудиогид и автоматизацию записи",
  "Получаете документ по профстандарту «Экскурсовод (гид)»",
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-secondary/60">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_80%_0%,color-mix(in_oklch,var(--color-primary)_16%,transparent),transparent)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:px-6 md:py-20 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
            Старт потока — 1 сентября 2026
          </span>

          <h1 className="mt-5 text-balance font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Станьте гидом и проводником, которых выбирают
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Курс «Цифровой компас: искусство впечатлений» научит автоматизировать
            рутину, создавать контент нейросетями и повышать безопасность и сервис —
            чтобы туристы возвращались и рекомендовали вас.
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
            <Button asChild size="lg">
              <a href="#lead">Записаться на обучение</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4 text-primary" aria-hidden="true" />
              Очно-заочно, онлайн
            </span>
            <span className="flex items-center gap-2">
              <FileBadge className="h-4 w-4 text-primary" aria-hidden="true" />
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
        </div>
      </div>
    </section>
  )
}
