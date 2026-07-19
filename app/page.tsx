import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { PainPoints } from "@/components/pain-points"
import { Relevance } from "@/components/relevance"
import { Learn } from "@/components/learn"
import { Results } from "@/components/results"
import { Conditions } from "@/components/conditions"
import { Curriculum } from "@/components/curriculum"
import { Faq } from "@/components/faq"
import { LeadForm } from "@/components/lead-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <PainPoints />
        <Relevance />
        <Learn />
        <Results />
        <Conditions />
        <Curriculum />
        <Faq />
        <LeadForm />
      </main>
      <SiteFooter />
    </div>
  )
}
