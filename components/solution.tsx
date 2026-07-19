import Image from "next/image"
import { Layers, MessagesSquare, PenTool, ShieldCheck } from "lucide-react"

const mechanism = [
  {
    icon: PenTool,
    title: "Промпт-инжиниринг",
    text: "Формула R-T-F и цепочки запросов, чтобы ИИ выдавал точный контент для экскурсий.",
  },
  {
    icon: MessagesSquare,
    title: "Живое общение + ИИ",
    text: "Технологии берут рутину, вы — впечатления и контакт с группой.",
  },
  {
    icon: ShieldCheck,
    title: "Проверка фактов",
    text: "Кросс-валидация и работа с официальными источниками против «галлюцинаций» ИИ.",
  },
  {
    icon: Layers,
    title: "Интеграция в работу",
    text: "Встраиваем ИИ в чат-боты, приложения и навигацию — прямо в вашу практику.",
  },
]

export function Solution() {
  return (
    <section id="solution" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
            <Image
              src="/results-tech.png"
              alt="Гид использует ноутбук с CRM и чат-ботом для планирования маршрутов"
              width={720}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Продукт как решение
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Как курс приводит вас к результату
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            «Цифровой компас» — это не набор разрозненных лайфхаков, а понятная
            система. Вы осваиваете инструменты на реальных задачах гида и внедряете
            их в свою работу параллельно с обучением.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {mechanism.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-display text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
