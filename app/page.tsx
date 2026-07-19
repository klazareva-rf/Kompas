import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { DesiredResult } from "@/components/desired-result"
import { Solution } from "@/components/solution"
import { FormatInfo } from "@/components/format-info"
import { Learn } from "@/components/learn"
import { Curriculum } from "@/components/curriculum"
import { Proof } from "@/components/proof"
import { Faq } from "@/components/faq"
import { Offer } from "@/components/offer"
import { Urgency } from "@/components/urgency"
import { LeadForm } from "@/components/lead-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        {/* 1. Первый экран: главный результат + конкретика + CTA */}
        <Hero />
        {/* 2. Узнавание проблемы */}
        <PainPoints />
        {/* 3. Желаемый результат */}
        <DesiredResult />
        {/* 4. Продукт как решение */}
        <Solution />
        {/* 5. Что входит: программа, формат, сроки */}
        <FormatInfo />
        <Learn />
        <Curriculum />
        {/* 6. Доказательства */}
        <Proof />
        {/* 7. Снятие возражений */}
        <Faq />
        {/* 8. Оффер */}
        <Offer />
        {/* 9. Ограничение / причина действовать сейчас */}
        <Urgency />
        {/* 10. Финальный CTA */}
        <LeadForm />
      </main>
      <SiteFooter />
    </div>
  )
}
