import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { ShinyButton } from "@/components/ui/shiny-button"

const pricingTiers = [
  {
    name: "Старт",
    price: "от 1 500 ₽",
    period: "/лид",
    description: "Для компаний, которые хотят протестировать канал и оценить качество лидов",
    features: [
      "От 20 лидов в месяц",
      "Одна ниша на выбор",
      "Прогноз перед запуском",
      "Старт через 24 часа",
      "Замена нецелевых лидов",
      "Персональный менеджер",
    ],
    cta: "Получить лиды",
    popular: false,
  },
  {
    name: "Рост",
    price: "от 1 200 ₽",
    period: "/лид",
    description: "Для активных продаж с постоянным потоком тёплых клиентов",
    features: [
      "От 50 лидов в месяц",
      "До двух ниш одновременно",
      "Прогноз и план продаж",
      "Старт через 24 часа",
      "Замена нецелевых лидов",
      "Персональный менеджер",
      "Еженедельные отчёты",
      "Оптимизация кампаний",
    ],
    cta: "Получить лиды",
    popular: true,
  },
  {
    name: "Масштаб",
    price: "По запросу",
    period: "",
    description: "Для крупных отделов продаж с потребностью от 100+ лидов в месяц",
    features: [
      "От 100 лидов в месяц",
      "Любые ниши",
      "Индивидуальный прогноз",
      "Старт через 24 часа",
      "Замена нецелевых лидов",
      "Выделенный менеджер",
      "Ежедневные отчёты",
      "Приоритетная поддержка",
      "Гарантия объёма",
    ],
    cta: "Обсудить условия",
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Простые и прозрачные тарифы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Платите за лиды, а не за «охват» и «показы». Чем больше объём — тем ниже цена за лид.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative p-8 h-full flex flex-col ${
                  tier.popular ? "border-primary shadow-lg shadow-primary/20" : "border-border"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <ShinyButton className="w-full justify-center">{tier.cta}</ShinyButton>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
