import { CalendarCheck, FileBadge, Laptop, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const conditions = [
  { icon: Laptop, title: "Полностью онлайн", text: "Учитесь из любой точки в удобном темпе." },
  { icon: Users, title: "Практика в группе", text: "Реальные кейсы и разбор задач гидов." },
  { icon: FileBadge, title: "Документ", text: "Диплом установленного образца по итогам." },
  { icon: CalendarCheck, title: "Поддержка", text: "Сопровождение куратора на всём курсе." },
]

export function Conditions() {
  return (
    <section id="conditions" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="overflow-hidden rounded-3xl border border-border bg-secondary/70">
        <div className="grid gap-8 p-6 md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              Самые лучшие условия
            </span>
            <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Всё, чтобы начать применять уже во время обучения
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Курс построен вокруг практики: вы внедряете инструменты в свою работу
              параллельно с обучением и видите результат сразу.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {conditions.map((item) => (
                <div key={item.title} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground">{item.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-primary/20 bg-card p-6 text-center shadow-lg shadow-primary/5 md:p-8">
            <p className="text-sm font-medium text-muted-foreground">Академия «Каспий»</p>
            <p className="mt-2 font-display text-2xl font-extrabold leading-tight text-foreground">
              Получите подробную программу курса бесплатно
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Напишите <span className="font-semibold text-primary">«КОМПАС»</span> — и мы
              отправим полную программу, стоимость и даты старта.
            </p>
            <Button asChild size="lg" className="mt-6 w-full">
              <a href="#lead">Написать «КОМПАС»</a>
            </Button>
            <p className="mt-3 text-xs text-muted-foreground">Ответим в течение рабочего дня</p>
          </div>
        </div>
      </div>
    </section>
  )
}
