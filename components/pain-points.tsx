import {
  BellRing,
  CalendarClock,
  ClipboardList,
  MessageSquareText,
  Star,
  UserCheck,
} from "lucide-react"

const routine = [
  { icon: MessageSquareText, text: "Ответы на десятки одинаковых вопросов" },
  { icon: UserCheck, text: "Подтверждение записей" },
  { icon: CalendarClock, text: "Согласование времени и места встречи" },
  { icon: BellRing, text: "Напоминания туристам" },
  { icon: ClipboardList, text: "Обработка заявок" },
  { icon: Star, text: "Сбор отзывов" },
]

export function PainPoints() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Работа гида — это экскурсии и общение? Не только.
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Опытные специалисты знают: большая часть времени уходит совсем не на
          красивые места, а на рутину.
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {routine.map((item) => (
          <li
            key={item.text}
            className="flex items-start gap-4 rounded-xl border border-border bg-card p-5"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
              <item.icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="pt-1.5 text-sm font-medium leading-relaxed text-foreground">
              {item.text}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center md:p-8">
        <p className="mx-auto max-w-3xl text-pretty text-lg font-medium leading-relaxed text-foreground">
          Вместо подготовки интересных маршрутов приходится заниматься рутиной. На
          курсе <span className="font-semibold text-primary">«Цифровой компас: искусство впечатлений»</span> вы
          узнаете, как автоматизировать большую часть задач и тратить время на то,
          что действительно важно: безопасность группы, качество сервиса и
          впечатления туристов.
        </p>
      </div>
    </section>
  )
}
