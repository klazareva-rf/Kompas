import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const modules = [
  {
    n: "01",
    title: "ИИ в работе гида",
    points: [
      "Знакомство с нейросетями и цифровыми помощниками",
      "Планирование маршрутов и составление программ с ИИ",
      "Генерация описаний, текстов и идей для экскурсий",
    ],
  },
  {
    n: "02",
    title: "Интерактивные экскурсии и квесты",
    points: [
      "Форматы вовлечения: квесты, геймификация, интерактив",
      "Сценарии для разных групп и возрастов",
      "Инструменты для создания интерактивного контента",
    ],
  },
  {
    n: "03",
    title: "Аналитика и персонализация",
    points: [
      "Анализ поведения и потребностей туристов",
      "Персонализация маршрутов под конкретные группы",
      "Повышение качества сервиса на основе данных",
    ],
  },
  {
    n: "04",
    title: "Автоматизация: чат-боты и CRM",
    points: [
      "Создание чат-бота для записи и ответов на вопросы",
      "Настройка CRM: заявки, напоминания, отзывы",
      "Экономия времени на рутинных задачах",
    ],
  },
  {
    n: "05",
    title: "Аудиогиды и мультиязычность",
    points: [
      "Создание аудиогидов на нескольких языках",
      "Инструменты озвучки и перевода",
      "Расширение аудитории и охвата",
    ],
  },
  {
    n: "06",
    title: "Безопасность и сервис",
    points: [
      "Навигация и цифровые инструменты в полевых условиях",
      "Стандарты безопасности группы",
      "Создание запоминающихся впечатлений",
    ],
  },
]

export function Curriculum() {
  return (
    <section id="curriculum" className="bg-secondary/60">
      <div className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Программа курса
          </span>
          <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Что вас ждёт внутри
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Пошаговая программа: от знакомства с ИИ до полной автоматизации работы
            и создания впечатлений.
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="mt-10 space-y-3">
          {modules.map((mod, i) => (
            <AccordionItem
              key={mod.n}
              value={`item-${i}`}
              className="overflow-hidden rounded-xl border border-border bg-card px-5 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="py-5 text-left hover:no-underline">
                <span className="flex items-center gap-4">
                  <span className="font-display text-sm font-extrabold text-primary">{mod.n}</span>
                  <span className="font-display text-base font-bold text-foreground md:text-lg">
                    {mod.title}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="ml-9 grid gap-2 pb-2">
                  {mod.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
