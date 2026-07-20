import { Award, BookCheck, ScrollText } from "lucide-react"

const stats = [
  { value: "2", label: "профстандарта в основе программы" },
  { value: "6", label: "модулей — от текстов до автоматизации" },
  { value: "5+", label: "нейросетей и цифровых сервисов на практике" },
  { value: "100%", label: "заданий на реальных задачах гида" },
]

const tools = [
  "ChatGPT",
  "Claude",
  "YandexGPT",
  "ElevenLabs",
  "Yandex SpeechKit",
  "Чат-боты",
  "CRM",
  "Навигация",
]

const standards = [
  {
    icon: ScrollText,
    title: "Экскурсовод (гид) 04.005",
    text: "Приказ Минтруда России от 24.12.2021 № 913н. Уровень квалификации 4 (А/01.4, А/02.4).",
  },
  {
    icon: ScrollText,
    title: "Специалист по данным цифрового следа 06.046",
    text: "Приказ Минтруда России от 09.07.2021 № 462н. Уровень квалификации 4 (А/01.4, А/02.4).",
  },
]

export function Proof() {
  return (
    <section id="proof" className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Доказательства
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Программа, которой можно доверять
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Курс разработан на основе профессиональных стандартов и строится вокруг
            реальных инструментов, которые уже используют современные гиды.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl border border-border bg-card p-6 text-center">
              <p className="font-display text-4xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {standards.map((item) => (
            <div key={item.title} className="flex items-start gap-4 rounded-xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <Award className="h-4 w-4 text-primary" aria-hidden="true" />
                  <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="flex items-center gap-2">
            <BookCheck className="h-5 w-5 text-primary" aria-hidden="true" />
            <h3 className="font-display text-lg font-bold text-foreground">
              Инструменты, которые вы освоите
            </h3>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {tools.map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-foreground"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
