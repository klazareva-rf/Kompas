import { Compass, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-sm font-extrabold tracking-tight text-foreground">
                Академия «Каспий»
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Курс «Цифровой компас: искусство впечатлений» — новый уровень
              профессии гида: опыт, сервис и современные технологии.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-foreground">Курс</h3>
            <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
              <li><a href="#about" className="transition-colors hover:text-primary">О курсе</a></li>
              <li><a href="#learn" className="transition-colors hover:text-primary">Чему научитесь</a></li>
              <li><a href="#curriculum" className="transition-colors hover:text-primary">Программа</a></li>
              <li><a href="#faq" className="transition-colors hover:text-primary">Вопросы</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold text-foreground">Контакты</h3>
            <ul className="mt-4 grid gap-2.5 text-sm text-muted-foreground">
              <li>
                <a href="tel:+78722701177" className="flex items-center gap-2 transition-colors hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                  +7 (8722) 70-11-77
                </a>
              </li>
              <li>
                <a href="mailto:info@caspian.academy" className="flex items-center gap-2 transition-colors hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                  info@caspian.academy
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                г. Махачкала
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Академия «Каспий». Все права защищены.
        </div>
      </div>
    </footer>
  )
}
