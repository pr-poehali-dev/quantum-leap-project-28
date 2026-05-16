import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { ShinyButton } from "@/components/ui/shiny-button"
import Icon from "@/components/ui/icon"

const pricingTiers = [
  {
    name: "Старт",
    icon: "Zap",
    price: "от 1 500 ₽",
    period: "/лид",
    description: "Для компаний, которые хотят протестировать канал",
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
    color: "from-secondary to-secondary/50",
  },
  {
    name: "Рост",
    icon: "TrendingUp",
    price: "от 1 200 ₽",
    period: "/лид",
    description: "Для активных продаж с постоянным потоком клиентов",
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
    color: "from-primary to-primary/80",
  },
  {
    name: "Масштаб",
    icon: "Rocket",
    price: "По запросу",
    period: "",
    description: "Для крупных отделов продаж от 100+ лидов в месяц",
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
    color: "from-secondary to-secondary/50",
  },
]

export function PricingSection() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden" id="pricing">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 100%, hsl(var(--primary) / 0.07) 0%, transparent 60%)`,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            Тарифы
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Простые и прозрачные тарифы</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Платите за лиды, а не за «охват» и «показы». Чем больше объём — тем ниже цена за лид.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={tier.popular ? "lg:-mt-4" : ""}
            >
              <div
                className={`
                  relative rounded-2xl overflow-hidden
                  ${tier.popular
                    ? "shadow-2xl shadow-primary/30 ring-2 ring-primary"
                    : "border border-border shadow-sm"
                  }
                `}
              >
                {tier.popular && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-xs font-bold tracking-wider uppercase">
                    Самый популярный
                  </div>
                )}

                <div className={`${tier.popular ? "bg-gradient-to-b from-primary/10 to-background" : "bg-card"} p-7`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tier.popular ? "bg-primary/15" : "bg-secondary"}`}>
                      <Icon name={tier.icon} className={`w-5 h-5 ${tier.popular ? "text-primary" : "text-muted-foreground"}`} />
                    </div>
                    <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-5">{tier.description}</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`text-4xl font-bold font-display ${tier.popular ? "text-primary" : ""}`}>
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span className="text-muted-foreground text-sm">{tier.period}</span>
                    )}
                  </div>

                  <ShinyButton
                    className="w-full justify-center mb-6"
                    variant={tier.popular ? "default" : "secondary"}
                  >
                    {tier.cta}
                  </ShinyButton>

                  <ul className="space-y-2.5">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${tier.popular ? "bg-primary/15" : "bg-secondary"}`}>
                          <Check className={`h-2.5 w-2.5 ${tier.popular ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          Нет долгосрочных контрактов. Выходите в любой момент.
        </motion.p>
      </div>
    </section>
  )
}
