import {
  Bot,
  BrainCircuit,
  Headphones,
  Map,
  Puzzle,
  Route,
  Users,
  Workflow,
} from "lucide-react"

const skills = [
  {
    icon: Map,
    title: "Планирование маршрутов с ИИ",
    text: "Быстро создавайте продуманные маршруты с помощью искусственного интеллекта.",
  },
  {
    icon: Puzzle,
    title: "Интерактивные экскурсии и квесты",
    text: "Вовлекайте туристов через интерактив, геймификацию и живые форматы.",
  },
  {
    icon: BrainCircuit,
    title: "Анализ поведения туристов",
    text: "Понимайте потребности группы и повышайте качество сервиса.",
  },
  {
    icon: Route,
    title: "Персонализация маршрутов",
    text: "Адаптируйте программы под конкретные группы и интересы участников.",
  },
  {
    icon: Bot,
    title: "Чат-боты для записи туристов",
    text: "Автоматизируйте запись, ответы на вопросы и подтверждения.",
  },
  {
    icon: Workflow,
    title: "Автоматизация через CRM",
    text: "Систематизируйте заявки, напоминания и работу с клиентами.",
  },
  {
    icon: Headphones,
    title: "Аудиогиды на нескольких языках",
    text: "Создавайте многоязычные аудиогиды и расширяйте аудиторию.",
  },
  {
    icon: Users,
    title: "И многое другое",
    text: "Новый уровень профессии: опыт, сервис и технологии вместе.",
  },
]

export function Learn() {
  return (
    <section id="learn" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Чему вы научитесь
        </span>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Это уже не «фишки» — это новый уровень профессии
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Академия «Каспий» собрала в одном курсе всё, что превращает гида в
          востребованного современного специалиста.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => (
          <article
            key={skill.title}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-primary/[0.03]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <skill.icon className="h-5.5 w-5.5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-base font-bold leading-snug text-foreground">
              {skill.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {skill.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
