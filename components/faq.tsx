import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const objections = [
  {
    q: "У меня нет технических знаний — справлюсь ли я?",
    a: "Да. Мы объясняем всё с нуля и на практике. Достаточно уверенно пользоваться смартфоном и компьютером — нейросети и сервисы осваиваем пошагово на реальных задачах гида.",
  },
  {
    q: "У меня нет времени на долгую учёбу.",
    a: "Обучение проходит в очно-заочной форме онлайн, в удобном темпе. Вы внедряете инструменты в свою работу параллельно с курсом и экономите часы уже во время обучения.",
  },
  {
    q: "Сколько это стоит?",
    a: "Стоимость зависит от условий текущего потока. Оставьте заявку — специалист Академии «Каспий» расскажет актуальную цену, рассрочку и что входит в стоимость.",
  },
  {
    q: "Можно ли доверять программе?",
    a: "Программа разработана на основе профессиональных стандартов «Экскурсовод (гид)» и «Специалист по данным цифрового следа», утверждённых приказами Минтруда России.",
  },
  {
    q: "Выдаётся ли документ?",
    a: "Да. По итогам обучения вы получаете документ установленного образца от Академии «Каспий».",
  },
  {
    q: "А если ИИ выдаёт недостоверную информацию?",
    a: "Отдельный блок курса посвящён верификации: кросс-валидация фактов, работа с официальными источниками и приёмы, которые минимизируют «галлюцинации» нейросетей.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Снятие возражений
        </span>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Отвечаем на частые сомнения
        </h2>
      </div>

      <Accordion type="single" collapsible className="mt-10 space-y-3">
        {objections.map((item, i) => (
          <AccordionItem
            key={item.q}
            value={`faq-${i}`}
            className="overflow-hidden rounded-xl border border-border bg-card px-5 data-[state=open]:border-primary/40"
          >
            <AccordionTrigger className="py-5 text-left font-display text-base font-bold text-foreground hover:no-underline">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
