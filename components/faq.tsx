import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faq = [
  {
    q: "Для кого этот курс?",
    a: "Для гидов, экскурсоводов, инструкторов и специалистов туризма, которые хотят автоматизировать рутину и работать современно — с ИИ, чат-ботами и аналитикой.",
  },
  {
    q: "Нужны ли технические знания?",
    a: "Нет. Мы объясняем всё с нуля и на практике. Достаточно уверенно пользоваться смартфоном и компьютером.",
  },
  {
    q: "В каком формате проходит обучение?",
    a: "Курс полностью онлайн. Вы учитесь в удобном темпе, выполняете практические задания и получаете поддержку куратора.",
  },
  {
    q: "Выдаётся ли документ?",
    a: "Да. По итогам обучения вы получаете документ установленного образца от Академии «Каспий».",
  },
  {
    q: "Как узнать стоимость и даты старта?",
    a: "Напишите «КОМПАС» в форме ниже — мы отправим подробную программу, стоимость и ближайшие даты старта.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-primary">
          Вопросы и ответы
        </span>
        <h2 className="mt-3 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          Частые вопросы по курсу
        </h2>
      </div>

      <Accordion type="single" collapsible className="mt-10 space-y-3">
        {faq.map((item, i) => (
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
