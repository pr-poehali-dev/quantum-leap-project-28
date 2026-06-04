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
import { Link } from "react-router-dom"

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <QuizSection />
        <TasksSection />
        <TrustSection />
        <NichesSection />
        <CaseStudiesSection preview />
        <TestimonialsSection />
        <ServicesSection />
        <HowItWorksSection />
        <FAQSection />
        <FinalOfferSection />
      </main>

      <footer className="border-t border-gray-100 bg-gray-50 py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-1">
              <Link to="/" className="font-display text-xl font-bold text-gray-900 hover:text-[#392AE7] transition-colors block mb-3">
                Вам Лям!
              </Link>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Агентство по генерации клиентов. Работаем с 2018 года. Помогли вырасти 250+ компаниям.
              </p>
              <p className="text-xs text-gray-300">
                ИНН: 7700000000<br />
                ОГРН: 1180000000000
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Направления</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li><Link to="/niches/investitsii" className="hover:text-gray-700 transition-colors">Частные инвестиции</Link></li>
                <li><Link to="/niches/franshizy" className="hover:text-gray-700 transition-colors">Франшизы</Link></li>
                <li><Link to="/niches/nedvizhimost" className="hover:text-gray-700 transition-colors">Недвижимость</Link></li>
                <li>
                  <button
                    onClick={() => document.querySelector("#quiz")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-gray-700 transition-colors"
                  >
                    Другие ниши
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Компания</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <button onClick={() => document.getElementById("trust")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gray-700 transition-colors">
                    О нас
                  </button>
                </li>
                <li><Link to="/cases" className="hover:text-gray-700 transition-colors">Кейсы</Link></li>
                <li>
                  <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gray-700 transition-colors">
                    Услуги
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("how")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gray-700 transition-colors">
                    Как мы работаем
                  </button>
                </li>
                <li>
                  <button onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-gray-700 transition-colors">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4 text-sm">Контакты</h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <a href="tel:+78001234567" className="hover:text-gray-700 transition-colors">
                    8 800 123-45-67
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@vamlyam.ru" className="hover:text-gray-700 transition-colors">
                    hello@vamlyam.ru
                  </a>
                </li>
                <li>
                  <a href="https://t.me/vamlyam" className="hover:text-gray-700 transition-colors">
                    Telegram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-700 transition-colors">WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-300">
            <p>&copy; 2018–2026 ООО «Вам Лям!». Все права защищены.</p>
            <div className="flex gap-6 flex-wrap justify-center">
              <a href="#" className="hover:text-gray-500 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-gray-500 transition-colors">Договор оферты</a>
              <a href="#" className="hover:text-gray-500 transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
