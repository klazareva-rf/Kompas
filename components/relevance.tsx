import Image from "next/image"
import { ShieldCheck, Sparkles, TrendingUp, Zap } from "lucide-react"

const expectations = [
  { icon: ShieldCheck, title: "Безопасность", text: "Туристы доверяют тем, кто заботится о группе." },
  { icon: Zap, title: "Быстрый отклик", text: "Мгновенные ответы и удобная запись." },
  { icon: Sparkles, title: "Сервис и впечатления", text: "Не сухая информация, а живой опыт." },
  { icon: TrendingUp, title: "Современный подход", text: "ИИ, навигация и аналитика в работе." },
]

export function Relevance() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:px-6 md:py-20 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Почему это важно сейчас
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Выигрывают не те, кто работает по-старому
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Конкуренция в туризме растёт с каждым сезоном, а вместе с ней — и
            требования к специалистам. Сегодня недостаточно просто знать маршрут
            или хорошо рассказывать. Побеждают те, кто совмещает опыт, сервис и
            современные технологии.
          </p>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Использование ИИ, цифровых инструментов, навигации, автоматизации и
            аналитики — это уже не преимущество, а способ работать эффективнее,
            безопаснее и быть востребованным специалистом.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {expectations.map((item) => (
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

        <div className="relative lg:order-first">
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
      </div>
    </section>
  )
}
