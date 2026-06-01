import { useState } from "react"
import { scrollToId } from "@/lib/scrollTo"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { QuizSection } from "@/components/QuizSection"
import { TasksSection } from "@/components/TasksSection"
import { TrustSection } from "@/components/TrustSection"
import { NichesSection } from "@/components/NichesSection"
import { CaseStudiesSection } from "@/components/CaseStudiesSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { ServicesSection } from "@/components/ServicesSection"
import { LeadsExplainerSection } from "@/components/LeadsExplainerSection"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { FAQSection } from "@/components/FAQSection"
import { FinalOfferSection } from "@/components/FinalOfferSection"
import { CookieBanner } from "@/components/CookieBanner"
import { LegalModal, LegalDoc } from "@/components/LegalModal"
import { Link } from "react-router-dom"

export default function Index() {
  const [legalDoc, setLegalDoc] = useState<LegalDoc | null>(null)

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main>
        <HeroSection />
        <LeadsExplainerSection />
        <QuizSection openLegal={() => setLegalDoc("privacy")} />
        <TasksSection />
        <TrustSection />
        <NichesSection />
        <CaseStudiesSection preview />
        <TestimonialsSection />
        <ServicesSection />
        <HowItWorksSection />
        <FAQSection />
        <FinalOfferSection openLegal={() => setLegalDoc("privacy")} />
      </main>

      {/* Футер */}
      <footer className="border-t border-gray-100 bg-gray-50 py-14" role="contentinfo">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* О компании */}
            <div className="md:col-span-1">
              <Link
                to="/"
                className="font-display text-xl font-bold text-gray-900 hover:text-[#392AE7] transition-colors block mb-3"
              >
                Вам Лям!
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Агентство по генерации клиентов. Работаем с 2018 года. Помогли вырасти 250+ компаниям.
              </p>
              {/* ЗАМЕНИТЬ: реальные реквизиты */}
              <p className="text-xs text-gray-300 leading-relaxed">
                ООО «Вам Лям!»<br />
                ИНН: 0000000000<br />
                ОГРН: 0000000000000
              </p>
            </div>

            {/* Направления */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Направления</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <Link to="/niches/investitsii" className="hover:text-gray-700 transition-colors">
                    Частные инвестиции
                  </Link>
                </li>
                <li>
                  <Link to="/niches/franshizy" className="hover:text-gray-700 transition-colors">
                    Франшизы
                  </Link>
                </li>
                <li>
                  <Link to="/niches/nedvizhimost" className="hover:text-gray-700 transition-colors">
                    Недвижимость
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId("quiz")}
                    className="hover:text-gray-700 transition-colors text-left"
                  >
                    Другие ниши
                  </button>
                </li>
              </ul>
            </div>

            {/* Компания */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Компания</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <button
                    onClick={() => scrollToId("trust")}
                    className="hover:text-gray-700 transition-colors"
                  >
                    О нас
                  </button>
                </li>
                <li>
                  <Link to="/cases" className="hover:text-gray-700 transition-colors">
                    Кейсы
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId("services")}
                    className="hover:text-gray-700 transition-colors"
                  >
                    Услуги
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToId("faq")}
                    className="hover:text-gray-700 transition-colors"
                  >
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            {/* Контакты */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                {/* ЗАМЕНИТЬ: реальные контакты */}
                <li>
                  <a
                    href="tel:+78001234567"
                    className="hover:text-gray-700 transition-colors"
                  >
                    8 800 123-45-67
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@vamlyam.ru"
                    className="hover:text-gray-700 transition-colors"
                  >
                    hello@vamlyam.ru
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/vamlyam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-700 transition-colors"
                  >
                    Telegram
                  </a>
                </li>
              </ul>
              <button
                onClick={() => setLegalDoc("contacts")}
                className="mt-4 text-xs text-[#392AE7] hover:underline transition-colors"
              >
                Реквизиты компании →
              </button>
            </div>
          </div>

          {/* Нижняя строка */}
          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            {/* ЗАМЕНИТЬ: реальное наименование и год основания */}
            <p>&copy; 2018–2026 ООО «Вам Лям!». Все права защищены.</p>
            <nav aria-label="Юридические документы" className="flex gap-5 flex-wrap justify-center">
              <button
                onClick={() => setLegalDoc("privacy")}
                className="hover:text-gray-600 transition-colors focus:outline-none focus:underline"
              >
                Политика конфиденциальности
              </button>
              <button
                onClick={() => setLegalDoc("consent")}
                className="hover:text-gray-600 transition-colors focus:outline-none focus:underline"
              >
                Согласие на обработку ПД
              </button>
              <button
                onClick={() => setLegalDoc("cookies")}
                className="hover:text-gray-600 transition-colors focus:outline-none focus:underline"
              >
                Cookie-политика
              </button>
              <button
                onClick={() => setLegalDoc("contacts")}
                className="hover:text-gray-600 transition-colors focus:outline-none focus:underline"
              >
                Реквизиты
              </button>
            </nav>
          </div>
        </div>
      </footer>

      {/* Cookie-баннер (opt-in) */}
      <CookieBanner />

      {/* Юридические поп-апы */}
      <LegalModal doc={legalDoc} onClose={() => setLegalDoc(null)} />
    </div>
  )
}