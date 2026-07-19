import { Check } from "lucide-react"

const results = [
  "Автоматизируете рутину: заявки, записи, напоминания и отзывы",
  "Собираете маршруты с помощью ИИ за минуты, а не часы",
  "Запускаете чат-бота и CRM для потока туристов",
  "Создаёте интерактивные экскурсии, квесты и аудиогиды",
  "Анализируете поведение групп и персонализируете сервис",
  "Повышаете безопасность, качество сервиса и впечатления туристов",
]

export function Results() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight md:text-4xl">
            Результаты курса
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/85">
            После обучения вы работаете эффективнее, безопаснее и создаёте
            туристический опыт, за который вас рекомендуют.
          </p>
        </div>

        <ul className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
          {results.map((item) => (
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
      </div>
    </section>
  )
}
