import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { SocialProof } from "@/components/SocialProof"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { FeaturesSlideshowSection } from "@/components/FeaturesSlideshowSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"

export default function Index() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturesSection />
        <HowItWorksSection />
        <FeaturesSlideshowSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <footer className="border-t border-border py-12 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-lg font-display">Вам Лям!</h3>
              <p className="text-sm text-muted-foreground">
                Генерируем целевых клиентов для инвестиционных проектов, франшиз и недвижимости с 2018 года.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Направления</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Частные инвестиции
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Франшизы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Недвижимость
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground transition-colors">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-foreground transition-colors">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#how" className="hover:text-foreground transition-colors">
                    Как работает
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Написать нам
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Договор оферты
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
            &copy; 2018–2026 «Вам Лям!». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  )
}