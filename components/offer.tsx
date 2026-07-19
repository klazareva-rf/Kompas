import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const included = [
  "6 модулей: от текстов и аудиогидов до чат-ботов, CRM и аналитики",
  "Практика на реальных задачах гида с внедрением в свою работу",
  "Навыки промпт-инжиниринга (формула R-T-F и цепочки запросов)",
  "Готовые приёмы верификации фактов и защиты от «галлюцинаций» ИИ",
  "Методы персонализации и геймификации экскурсий",
  "Документ установленного образца по итогам обучения",
]

export function Offer() {
  return (
    <section id="offer" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary-foreground/80">
            Оффер
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Что вы получаете на курсе
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/85">
            Полная система, которая превращает гида в востребованного современного
            специалиста — и подтверждающий документ.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {included.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl bg-primary-foreground/10 p-5 ring-1 ring-inset ring-primary-foreground/15"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-foreground/20">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-sm font-medium leading-relaxed">{item}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" variant="secondary" className="gap-2">
            <a href="#lead">Записаться на обучение</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
