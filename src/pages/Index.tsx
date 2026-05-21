import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { QuizSection } from "@/components/QuizSection"
import { TasksSection } from "@/components/TasksSection"
import { TrustSection } from "@/components/TrustSection"
import { NichesSection } from "@/components/NichesSection"
import { CaseStudiesSection } from "@/components/CaseStudiesSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { ServicesSection } from "@/components/ServicesSection"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { FAQSection } from "@/components/FAQSection"
import { FinalOfferSection } from "@/components/FinalOfferSection"

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <QuizSection />
        <TasksSection />
        <TrustSection />
        <NichesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ServicesSection />
        <HowItWorksSection />
        <FAQSection />
        <FinalOfferSection />
      </main>

      <footer className="border-t border-border bg-secondary/30 py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <a href="/" className="text-xl font-bold font-display block mb-3">Вам Лям!</a>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Агентство по генерации клиентов для бизнеса. Работаем с 2018 года. Помогли вырасти 250+ компаниям.
              </p>
              <p className="text-sm text-muted-foreground">
                ИНН: 7700000000<br />
                ОГРН: 1180000000000
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Направления</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#niches" className="hover:text-foreground transition-colors">Частные инвестиции</a></li>
                <li><a href="#niches" className="hover:text-foreground transition-colors">Франшизы</a></li>
                <li><a href="#niches" className="hover:text-foreground transition-colors">Недвижимость</a></li>
                <li><a href="#niches" className="hover:text-foreground transition-colors">Другие ниши</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Компания</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#cases" className="hover:text-foreground transition-colors">Наши кейсы</a></li>
                <li><a href="#services" className="hover:text-foreground transition-colors">Услуги</a></li>
                <li><a href="#how" className="hover:text-foreground transition-colors">Как мы работаем</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">Партнёрство</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-sm">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a href="tel:+78001234567" className="hover:text-foreground transition-colors">
                    8 800 123-45-67
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@vamlyam.ru" className="hover:text-foreground transition-colors">
                    hello@vamlyam.ru
                  </a>
                </li>
                <li>
                  <a href="https://t.me/vamlyam" className="hover:text-foreground transition-colors">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
            <p>&copy; 2018–2026 ООО «Вам Лям!». Все права защищены.</p>
            <div className="flex gap-6 flex-wrap justify-center">
              <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-foreground transition-colors">Договор оферты</a>
              <a href="#" className="hover:text-foreground transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
