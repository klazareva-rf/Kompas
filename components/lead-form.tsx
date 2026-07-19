"use client"

import { useState } from "react"
import { CheckCircle2, Compass, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="lead" className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid items-center gap-10 rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5 md:grid-cols-2 md:p-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <Compass className="h-3.5 w-3.5" aria-hidden="true" />
              Запись на поток
            </span>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
              Запишитесь на курс «Цифровой компас»
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Оставьте контакты, и специалист Академии «Каспий» свяжется с вами:
              расскажет о стоимости, условиях и закрепит за вами место в потоке от
              1 сентября 2026.
            </p>
          </div>

          {submitted ? (
            <div
              className="flex flex-col items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
              role="status"
            >
              <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
              <p className="mt-4 font-display text-xl font-bold text-foreground">
                Заявка отправлена!
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Мы свяжемся с вами в течение рабочего дня и вышлем подробную
                программу курса.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Ваше имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Например, Мария"
                  className="h-11 rounded-lg border border-input bg-background px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="h-11 rounded-lg border border-input bg-background px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="grid gap-1.5">
                <label htmlFor="contact" className="text-sm font-medium text-foreground">
                  Email или мессенджер
                </label>
                <input
                  id="contact"
                  name="contact"
                  type="text"
                  placeholder="Куда отправить программу"
                  className="h-11 rounded-lg border border-input bg-background px-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button type="submit" size="lg" className="mt-1 w-full gap-2">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Записаться на обучение
              </Button>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
