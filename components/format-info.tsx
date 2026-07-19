import { CalendarCheck, FileBadge, GraduationCap, Laptop, Users } from "lucide-react"

const items = [
  {
    icon: Laptop,
    title: "Формат",
    text: "Очно-заочная форма, обучение онлайн в удобном темпе",
  },
  {
    icon: CalendarCheck,
    title: "Старт потока",
    text: "1 сентября 2026 года, количество мест ограничено",
  },
  {
    icon: FileBadge,
    title: "Документ",
    text: "Документ установленного образца по итогам обучения",
  },
  {
    icon: GraduationCap,
    title: "Вход",
    text: "Достаточно среднего профессионального образования",
  },
  {
    icon: Users,
    title: "Профстандарты",
    text: "Программа на основе профстандартов «Экскурсовод (гид)» и «Специалист по данным цифрового следа»",
  },
]

export function FormatInfo() {
  return (
    <section id="program" className="mx-auto max-w-6xl px-4 pt-16 md:px-6 md:pt-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Что входит в курс
        </span>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Программа, формат и сроки
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Прозрачная структура: понятно, чему вы научитесь, как проходит обучение и
          какой документ получаете.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.title} className="rounded-xl border border-border bg-card p-5">
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
    </section>
  )
}
