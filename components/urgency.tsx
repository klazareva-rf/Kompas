import { CalendarClock, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const points = [
  {
    icon: CalendarClock,
    title: "Старт 1 сентября 2026",
    text: "Набор на поток идёт заранее — успейте занять место до старта.",
  },
  {
    icon: Users,
    title: "Мест ограничено",
    text: "Формат с практикой и сопровождением — группа набирается небольшой.",
  },
  {
    icon: Clock,
    title: "Рынок меняется сейчас",
    text: "Гиды с цифровыми навыками получают клиентов раньше остальных.",
  },
]

export function Urgency() {
  return (
    <section id="urgency" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="overflow-hidden rounded-3xl border border-primary/20 bg-secondary/70 p-6 md:p-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" />
            Почему стоит записаться сейчас
          </span>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Поток стартует 1 сентября 2026, а мест ограничено
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Чем раньше вы освоите инструменты, тем быстрее начнёте выделяться среди
            конкурентов и привлекать туристов.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {points.map((item) => (
            <li key={item.title} className="rounded-xl border border-border bg-card p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-3 font-display text-base font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg">
            <a href="#lead">Записаться на обучение</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
