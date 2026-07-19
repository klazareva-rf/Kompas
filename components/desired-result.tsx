import { ArrowRight } from "lucide-react"

const transformations = [
  {
    before: "Часы на переписку с туристами и подтверждение записей",
    after: "Чат-бот и CRM отвечают и записывают за вас — 24/7",
  },
  {
    before: "Тексты экскурсий пишутся вручную неделями",
    after: "Готовый сценарий с учётом региона за вечер с помощью ИИ",
  },
  {
    before: "Одинаковая программа для всех групп",
    after: "Персональные маршруты и квесты под интересы каждой группы",
  },
  {
    before: "Работа только на одном языке",
    after: "Аудиогиды и перевод на несколько языков — шире аудитория",
  },
  {
    before: "Сложно выделиться среди конкурентов",
    after: "Современный сервис, за который рекомендуют и возвращаются",
  },
]

export function DesiredResult() {
  return (
    <section id="result" className="bg-secondary/60">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Желаемый результат
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Что изменится в вашей работе после курса
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Вы перестаёте тонуть в рутине и переключаетесь на то, что приносит
            доход и впечатления: сервис, безопасность и уникальный опыт для
            туристов.
          </p>
        </div>

        <ul className="mt-10 grid gap-4">
          {transformations.map((item) => (
            <li
              key={item.after}
              className="grid items-center gap-3 rounded-xl border border-border bg-card p-5 sm:grid-cols-[1fr_auto_1fr]"
            >
              <p className="text-sm leading-relaxed text-muted-foreground line-through decoration-muted-foreground/40">
                {item.before}
              </p>
              <span className="hidden h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary sm:flex">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold leading-relaxed text-foreground">
                {item.after}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
